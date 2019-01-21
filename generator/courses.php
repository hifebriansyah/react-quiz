<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "scrum";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function toLink($string) {
   return (!$string) ? $string : preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $string)));
}

$courses = $conn->query('SELECT * FROM courses')->fetch_all(MYSQLI_ASSOC);
$items = $conn->query('SELECT * FROM course_items')->fetch_all(MYSQLI_ASSOC);

$conn->close();

$data = [];

foreach ($courses as $i => $course) {
	$data[$i]['status'] = $course['status'];
	$data[$i]['title']['en'] = $course['title_en'];
	$data[$i]['title']['bi'] = ($course['title_bi']);
	$data[$i]['content']['en'] = $course['content_en'];
	$data[$i]['content']['bi'] = $course['content_bi'];
	$data[$i]['link']['en'] = toLink($course['title_en']);
	$data[$i]['link']['bi'] = toLink($course['title_bi']);

	foreach ($items as $x => $item) {
		if ($item['course_id'] == $course['id']) {
			$temp = [];

			$temp['status'] = $item['status'];
			$temp['title']['en'] = $item['title_en'];
			$temp['title']['bi'] = $item['title_bi'];
			$temp['total'] = $item['total'];

			$temp['price']['en'] = ($item['status'] == '1')
				? '$'.$item['price']
				: (($item['price'] == '0')
					? 'FREE'
					: (($item['status'] == '2')
						? 'BETA'
						: (($item['status'] == '3')
							? 'SOON'
							: null)));

			$temp['price']['bi'] = ($item['status'] == 1)
				? '$'.$item['price']
				: (($item['price'] == '0')
					? 'GRATIS'
					: (($item['status'] == '2')
						? 'BETA'
						: (($item['status'] == '3')
							? 'SEGERA'
							: null)));

			$data[$i]['items'][] = $temp;
		}
	}
}

echo json_encode(['data' => $data]);