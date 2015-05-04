var bio = {
	"name" : "Yoonku Jacob Hwang",
	"role" : "Mathematical Engineering",
	"contacts" : {
		"mobile" : "+82-10-7473-0624",
		"email" : "yoongu.hwang@gmail.com",
		"github" : "http://github.com",
		"location" : "Gwangmyung-si, Korea"
	},
	"welcomeMessage" : "Hi, there !",
	"skills" : ["Finite Element Method", 
				"Signal Processing", 
				"Medical Imaging", 
				"Data Analysis", 
				"C/C++, CUDA",
				"Python, MATLAB"],
	"bioPic" : "images/fry.jpg",
};

var education = {
	"schools" : [
		{
			"name" : "Yonsei University",
			"location" : "Sinchon-dong, Seoul",
			"degree" : "BS",
			"majors" : ["Mathematics"],
			"dates" : 2011,
			"url" : "http://www.yonsei.ac.kr"
		},
		{
			"name" : "Yonsei University",
			"location" : "Sinchon-dong, Seoul",
			"degree" : "Master",
			"majors" : ["Applied Mathematics"],
			"dates" : 2012,
			"url" : "http://cse.yonsei.ac.kr"
		}
	],
	"onlineCourses" : [
	{
		"title" : "An Introduction to Functional Analysis",
		"school" : "Ecole Centrale Paris",
		"date" : 2014,
		"url" : "https://www.coursera.org/signature/certificate/YJKK2YRSMB"
	},
	{
		"title" : "Digital Signal Processing",
		"school" : "École Polytechnique Federale de Lausanne",
		"date" : 2014,
		"url" : "https://www.coursera.org/signature/certificate/FGRUNL98A2"
	},
	{
		"title" : "Heterogenous Parallel Computing",
		"school" : "University of Illinois Urbana-Champaign",
		"date" : 2013,
		"url" : "http://www.coursera.org/"
	}
	]
};

var work = {
	"jobs" : [
	{
		"employer" : "Samsung Medison",
		"title" : "Engineer",
		"location" : "Gangnam-gu, Seoul",
		"dates" : "2012-present",
		"description" : "Real-time Ultrasound Signal Processing, High Performance Computing(C/C++, CUDA), Numerical Analysis(Python, Matlab), Research Ultrasound Technology with foreign consultants"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "Optimization based domain decomposition method for PDEs with random inputs",
		"dates" : "2011-2013",
		"description" : "Stochastic PDE + Domain Decomposition"
	},
	{
		"title" : "Mathematical Epidemic Modeling : Korea Centers for Disease Control & Prevention",
		"dates" : "2010-2012",
		"description" : "Find the optimal governmental control to minimize Infectious Population using SLIAR Model"
	}
	]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

$("#header").append(HTMLskillsStart);
for(skill in bio.skills){
	$("#header").append(HTMLskills.replace("%data%", bio.skills[skill]));
}

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$(".work-entry:last").append(employer + title);
	var workDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(workDate);
	var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(workLocation);	
	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(workDescription);	
}

for(proj in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
	$(".project-entry:last").append(projTitle);
	var projDate = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
	$(".project-entry:last").append(projDate);
	var projDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
	$(".project-entry:last").append(projDescription);	
}

for(edu in education.schools){
	var school = education.schools[edu];
	$("#education").append(HTMLschoolStart);
	var schoolName = HTMLschoolName.replace("%data%", school.name);
	var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
	$(".education-entry:last").append(schoolName + schoolDegree);
	var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
	$(".education-entry:last").append(schoolDates);
	var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
	$(".education-entry:last").append(schoolLocation);
	var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
	$(".education-entry:last").append(schoolMajor);
}
$("#mapDiv").append(googleMap);
initializeMap();
