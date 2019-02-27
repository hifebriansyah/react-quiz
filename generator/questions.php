<?php

header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "scrum";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$title = str_replace("-", " ", $_GET['title']);

$chapter = $conn->query('SELECT * FROM chapters where title_en = "'.$title.'"')->fetch_all(MYSQLI_ASSOC);

$where = ($chapter[0]['content_en'])
	? 'where id in ('.$chapter[0]['content_en'].')'
	: '';

$questions = $conn->query('SELECT id, content_en, content_bi, feedback_en, feedback_bi, category FROM questions '.$where)->fetch_all(MYSQLI_ASSOC);
$options = $conn->query('SELECT * FROM options')->fetch_all(MYSQLI_ASSOC);

$conn->close();

$data = [];

foreach ($questions as $i => $question) {
	$data[$i] = [
		'content' => [
			'en' => $question['content_en'],
			'bi' => $question['content_bi']
		],
		'category' => $question['category']+0,
		'id' => $question['id'],
		'feedback' => [
			'en' => $question['feedback_en'],
			'bi' => $question['feedback_bi']
		]
	];

	foreach ($options as $x => $option) {
		if (in_array($question['id'], explode(',', $option['question_ids']))) {
			$data[$i]['options'][] = [
				'id' => $option['id'],
				'content' => [
					'en' => $option['content_en'],
					'bi' => $option['content_bi']
				],
				'answer' => ($option['answer'] == "1")
			];
		}
	}
}

//echo "<pre>", print_r($data);

echo base64_encode(json_encode(['data' => $data]));