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

function toLink($string) {
   return (!$string) ? $string : preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $string)));
}

$link = str_replace('-', ' ', $_GET['link']);

$sections = $conn->query('
	select c.title_en as course_title_en, c.title_bi as course_title_bi, s.*  from courses c, sections s
	where c.id = s.course_id and c.title_en = "'.$link.'" or c.title_bi = "'.$link.'"
	order by s.id
')->fetch_all(MYSQLI_ASSOC);

$chapters = $conn->query('
	select c.title_en as en, c.title_bi as bi, ch.*  from courses c, sections s, chapters ch
	where c.id = s.course_id and s.id = ch.section_id and c.title_en = "'.$link.'" or c.title_bi = "'.$link.'"
')->fetch_all(MYSQLI_ASSOC);

$conn->close();

$data = null;

foreach ($sections as $i => $section) {
	$data[$i] = [
		'title' => [
			'en' => $section['title_en'],
			'bi' => $section['title_bi']
		],
		'type' => [
			'id' => $section['type']+0,
			'en' => ($section['type'] == 1) ? 'Mock Exam' : 'Lessons',
			'bi' => ($section['type'] == 1) ? 'Latihan Soal' : 'Materi'
		]
	];

	foreach ($chapters as $x => $chapter) {
		if ($chapter['section_id'] == $section['id']) {
			$data[$i]['chapters'][] = [
				'title' => [
					'en' => $chapter['title_en'],
					'bi' => $chapter['title_bi']
				],
				'link' => [
					'en' => toLink($chapter['title_en']),
					'bi' => toLink($chapter['title_bi'])
				]
			];
		}
	}
}

$course = !isset($section) ? null : [
	'title' => [
		'en' => $section['course_title_en'],
		'bi' => $section['course_title_bi']
	]
];

echo json_encode(['course' => $course, 'data' => $data]);