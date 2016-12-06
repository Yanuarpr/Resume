var formattedName = HTMLheaderName.replace("%data%","Yanuar Pribadi");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Yanuar Pribadi",
	"role" : "Web Developer",
	"contacts":{
		"mobile":"082127163231",
		"email": "yanuarpr@gmail.com",
		"github": "Yanuarpr",
		"blog": "boedakbagertea.com",
		"location": "Indonesia Jawa Barat Sukabumi"
	},
	"welcomeMessage": "Nothing come easy in Life",
	"skills":[
	"Computer Maentenance", "Data Entry", "Web Developer", "Drafting", "Network Enginer", "grapic Design"],
	"biopic": "images/IangTea.jpg"
	
}


var formattedMobile = HTMLmobile.replace("%data%", "082127163231");
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", "yanuarpr@gmail.com");
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", "Yanuarpr");
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", "boedakbagertea.com");
$("#topContacts").append(formattedBlog);
$("#footerContacts").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", "Indonesia Sukabumi");
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);



var formattedBiopic = HTMLbioPic.replace("%data%","images/IangTea.jpg");
$("#header").append(formattedBiopic);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%","Nothing come easy in Life");
$("#header").append(formattedwelcomeMessage);
 	
	if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	}

var educations = { 
	"school": [
	{
		"name": "High School 2",
		"location": "Sukabumi",
		"degree": "Social",
		"major": "CS",
		"dates": "1998"
	}
	],

	"onlinecourses":[
	{
	"title": "JavaScript Crash Course",
	"school": "Udacity",
	"dates": "2016",
	"url": "http://www.udacity.com/course/ud804"
	}
	]
}


for(education in educations.school){
	$("#education").append(HTMLschoolStart);
	
	var formattedName = HTMLschoolName.replace("%data%", educations.school[education].name);
	var formattedDegree = HTMLschoolDegree.replace("%data%", educations.school[education].degree);
	var formattedNameDegree = formattedName + formattedDegree;
	$(".education-entry:last").append(formattedNameDegree);
	
	var formattedLocation = HTMLschoolLocation.replace("%data%", educations.school[education].location);
	$("education-entry:last").append(formattedLocation);
		
	var formattedDates = HTMLschoolDates.replace("%data%", educations.school[education].dates);
	$(".education-entry:last").append(formattedDates);
	
	var formattedMajor = HTMLschoolMajor.replace("%data%", educations.school[education].major);
	$(".education-entry:last").append(formattedMajor);

	
	$(".education-entry:last").append(HTMLonlineClasses);
	
    var formattedTitle = HTMLonlineTitle.replace("%data%", educations.onlinecourses[education].title);
	var formattedSchool = HTMLonlineSchool.replace("%data%", educations.onlinecourses[education].school);
	var formattedTitleSchool = formattedTitle + formattedSchool;
	$(".education-entry:last").append(formattedTitleSchool);
	
	var formattedDates = HTMLonlineDates.replace("%data%", educations.onlinecourses[education].dates);
	$(".education-entry:last").append(formattedDates);
		
	var formattedUrl = HTMLonlineURL.replace("%data%", educations.onlinecourses[education].url);
	$(".education-entry:last").append(formattedUrl);
}
	
var work = {
	"jobs":[
	 {
		"employer": "Matahari Mall",
		"title": "Pramuniaga",
		"dates": "November 1999 - January 2000",
		"location": "Sukabumi",
		"description": "Membantu Coordinator dan supervisor dalam mengelola merchandise atau barang di counter area penjualan, Membentuk kepercayaan pelanggan terhadap performance perusahaan dan kualiatas barang yang dijual, Menebak kebutuhan pelanggan dan membantu memilihkan barang yang sesuai dengan apa yang di inginkan konsumen, Menjawab pertanyaan pelanggan dan melayani complain dari pelanggan dengan baik, Menginformasikan kualitas barang sampai dengan cara perawatannya kepada pelanggan, Mengutamakan pelayanan kepada konsumen dengan baik,Mencapai target sales,Menjaga kebersihan diwilayah penjualan merchandise"
	 },
	 {
		"employer": "KINO Care",
		"title": "Packing",
		"dates": "Maret - Agustus 2002",
		"location": "Sukabumi",
		"description": "Memastikan seluruh pekerjaan packing finish good selesai dengan baik dan tepat waktu, Memastikan packaging material siap untuk pekerjaan packing, Memastikan produk yang hendak dipacking tidak ada kerusakan, melaporkan kerusakan mesin packaging pada bagian maintenance." 
	 },
	 {
		"employer": "CV.Griffin",
		"title": "Teknisi data entry",
		"dates": "November 2002 - Maret 2005",
		"location": "Sukabumi",
		"description": "Perbaikan computer dengan kerusakan atau disfunsi, Install atau download aplikasi computer, Merakit bagian – bagian computer, Pemeliharan jaringan dan pemecahan masalah, Periksa kapasitas computer, Memeriksa dan memperbaiki koneksi computer, Berkomunikasi dengan klien tentang kondisi computer, Menyarankan perawatan yang tepat dari computer dan program computer terbaik, Mengentri data dan melaksakan pembetulan atas kesalahan pengisian data."
	 },
	 {
		"employer": "SpeedNet",
		"title": "Teknisi VSAT",
		"dates": "April- Juni 2005",
		"location": "Jakarta",
		"description": "Melakukan pemasangan VSAT, Melakukan pengetesan perangkat VSAT, Memastikan perangkat VSAT dapat berfungsi dengan baik, Melakukan perbaikan perangkat VSAT bila ada kerusakan."
	 },
     {	 
		"employer": "PT. Jaya Kencana",
		"title": "Helper Teknisi Listrik",
		"dates": "Agustus - Oktober 2006",
		"location": "Jakarta",
		"description": "Bertanggung jawab kepada Kabag Teknik listrik atas hasil pekerjaan, Bertanggung jawab atas kelengkapan peralatan kerja, Bertanggung jawab atas penggunaan sparepart elektrik dan telephone, Bertanggung jawab atas laporan yang dibuat, Bertanggung jawab atas kebersihan lingkungan kerja."
	 },
     {	 
		"employer": "PT.decorient",
		"title": "Scafolder",
		"dates": "November 2008-January 2012",
		"location": "Jakarta",
		"description": "Memperbaiki rails pengaman dan jala safety, Mengembalikan dan merapikan scaffolding yang sudah dipakai, Memasang base plat di jalan yang dilalui pekerja supaya tidak tergelincir."
	 },
	 {
		"employer": "PT.Patrakom",
		"title": "Standby Operator",
		"dates": "January 2012 - Present",
		"location": "Jakarta",
		"description": "Mempersiapkan peralatan computer menurut program dan petunjuk operasi, Mengentri data dan mempelajari konsep surat/ naskah dinas, Memilih data sesuai program, Mengoperasikan computer dan mengamati hasil proses, Melaksanakan pembetulan atas kesalahan mengisi data, Melaksanakan pengetikan surat/naskah dinas dengan menggunakan computer, Melaksanakan konsultasi dengan pembuat konsep naskah apabila ada hal yang tidak dipahami, Melaporkan kegiatan kepada atasan, Melaksanakan tugas kedinasan lainnya sesuai dengan perintah atasan."
	 }
	]
}
function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();

var projects = {
	"projects": [
	{
		"title": "Resume Project ",
		"dates": "2016",
		"description":"Belajar Javascript Basics perkenalan mengenai proyek ini instal GH Repo membuat proyek resume dengan HTML Js dan CSS mengenal permasalahan yang terdapat dalam membuat proyek resume ini.",
		"images": [
		 "images/Flasher-Resume-Template-green.jpg",
		 "images/Mycvfactory-Sérieux-cv-traditionnel-0.jpg"
		 ]
	},
	{
		"title": "Wheather Aplikasi Project ",
		"dates": "2016",
		"description":"Aplikasi handphone untuk mengetahui cuaca dilokasi tempat anda tinggal termasuk prakiraan cuaca untuk tiga hari kedepan dengan tampilan yang sangat bagus dan dapat mengetahuai lokasi manapun diseluruh dunia dengan mudah dengan melalui tombol pencarian, atau ditambahkan ke menu favorit sehingga mudah dipanggil.",
		"images":[
		"images/Aplikasi Cuaca.jpg",
		"images/Aplikasi Cuaca2.jpg"
		]
	}
	]
}

 
  for(project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);	
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
	$(".project-entry:last").append(formattedDescription);
	
	if(projects.projects[project].images.length > 0){
		for(image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
		
	}
	}

	$("#mapDiv").append(googleMap);
