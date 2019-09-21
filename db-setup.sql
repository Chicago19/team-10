CREATE TABLE profile(
	name varchar(30),
	email varchar(30) PRIMARY KEY,
	referral varchar(30),
	phone varchar(13),
	password varchar(42),
	age char(2)
);

CREATE TABLE class(
	email varchar(30) REFERENCES profile(email),
	class_name varchar(30),
	score varchar(10),
	PRIMARY KEY (email, class_name)
);

CREATE TABLE official(
	email varchar(30) REFERENCES profile(email),
	registration_date varchar(30),
	keyword varchar(30),
	oral_score varchar(30),
	written_level varchar(30),
	test_date timestamp,
	best_exam varchar(30),
	iccb_intake_form varchar(30),
	empowerment_survey varchar(30),
	transportation varchar(10),
	site_location varchar(15),
	sig_date timestamp,
	signed boolean,

	PRIMARY KEY (email)
);
