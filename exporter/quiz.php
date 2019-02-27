<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "scrum";

$con = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($con, 'utf8');

if ($con->connect_error) {
    die("Conection failed: " . $con->connect_error);
}

$data1 = json_decode(include('psm-i.php'), true);
$data2 = json_decode(include('pspo-i.php'), true);

$data = [
	'questions' => array_merge($data1['questions'], $data2['questions']),
	'choices' => array_merge($data1['choices'], $data2['choices']),
];

$questions = [];
$options = [];
$question_keys = [];
$option_keys = [];

foreach ($data['questions'] as $i => $question) {
	$prompt = mysqli_escape_string($con, (
		preg_replace( '/[\x{200B}-\x{200D}]/u', '', strip_tags($question['prompt']))
	));

	$text_explanation = mysqli_escape_string($con, (
		preg_replace( '/[\x{200B}-\x{200D}]/u', '', strip_tags($question['text_explanation']))
	));

	if (!in_array($prompt, $question_keys)) {
		$question_keys[] = $prompt;
		$id = count($question_keys);

		$questions[$id - 1] = [
			'id' => $id,
			'feedback_en' => $text_explanation,
			'content_en' => $prompt,
			'category' => ($question['display_type'] == 'checkbox' ? 2 : 1)
		];

		foreach ($data['choices'] as $x => $choice) {
			if($choice['question_id'] == $question['id']){
				$text = mysqli_escape_string($con, (
					preg_replace( '/[\x{200B}-\x{200D}]/u', '', strip_tags($choice['text']))
				));

				$needle = strtolower($text.'-'.($choice['credited'] ? 1 : 0));
				
				$temp = [
					'content_en' => $text,
					'answer' => $choice['credited'],
				];

				$questions[$id - 1]['options'][] = $temp;

				if ($key = array_search($needle, $option_keys)) {
					$options[$key]['question_ids'][] = $id;
				} else {
					$index = count($options);
					$option_keys[count($options)] = $needle;
					$options[$index] = $temp;
					$options[$index]['question_ids'][] = $id;
				}
			}
		}
	}
}

// insert questions

$values = [];

foreach ($questions as $key => $question) {
	$values[] = '('
		.$question['id'].',"'
		.$question['feedback_en'].'","'
		.$question['content_en'].'",'
		.$question['category'].')';
}

$columns = 'id, feedback_en, content_en, category';
$values  = implode(", ", $values);
$sql = "INSERT INTO `questions` ($columns) VALUES $values";

$con->query('TRUNCATE TABLE `questions`;');

if ($con->query($sql) !== TRUE) {
    echo "Error: " . $sql . "<br>" . $con->error;
}

// insert options

$values = [];

foreach ($options as $key => $option) {
	$values[] = '("'
		.implode(',', $option['question_ids']).'","'
		.$option['content_en'].'",'
		.($option['answer'] + 0).')';
}

$columns = 'question_ids, content_en, answer';
$values  = implode(", ", $values);
$sql = "INSERT INTO `options` ($columns) VALUES $values";

$con->query('TRUNCATE TABLE `options`;');

if ($con->query($sql) !== TRUE) {
    echo "Error: " . $sql . "<br>" . $con->error;
}