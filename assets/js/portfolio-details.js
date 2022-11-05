
function saveValue(projectName) {
    

    localStorage.setItem("selected_project", projectName);


}

function showDetails() {
  
  // Get value from local storage
  var selectedProject = localStorage.getItem("selected_project");

  var img1Url,
    img2Url,
    img3Url,
    projectName,
    category,
    client,
    projectUrl = "#",
    description;

    switch(selectedProject) {
      case "elpr": {

	      img1Url = "assets/img/portfolio/elpr-details-1.jpg";
	      img2Url = "assets/img/portfolio/elpr-details-2.jpg";
	      img3Url = "assets/img/portfolio/elpr.jpg";
	    
	      projectName = " ELPR"
	      category = " Mobile Application";
	      client = " United States";
	      description = "ELPR(Emergency Locator for Public Rescue) is an emergency service provider application that is design specially for public.";
      
    	  break;
      } 
      case "kidos": {

	      img1Url = "assets/img/portfolio/kidos-details-1.jpg";
	      img2Url = "assets/img/portfolio/kidos-details-2.jpg";
	      img3Url = "assets/img/portfolio/kidos-details-3.jpg";
	    
	      projectName = " Kidos"
	      category = " Mobile Application";
	      client = " IDZ Cunsultancy, Isreal";
	      projectUrl = "https://youtu.be/AKNkJSnxq94";
	      description = "Kidos is a online nursery management application.";

  	    break;
    } 
    case "sports_court": {

	      img1Url = "assets/img/portfolio/sports-court-details.jpg";
	      img2Url = "assets/img/portfolio/sports-court-details.jpg";
	      img3Url = "assets/img/portfolio/sports-court-details.jpg";
	    
	      projectName = " Sports Court";
	      category = " Mobile Application";
	      client = " Lahore Garrison University, Pakistan";
	      projectUrl = "https://youtu.be/tY0Oxuc_7YQ";
	      description = "Sport Court is an online sports booking application in which users can book sports-related venues in their comfort zone where they want, share skills with others, get match updates, and can take part in the events that will be organized by the courts owner. This will be beneficial for all users and courts owner. ";
	   
	  	 break;

    } 
	case "video_player": {

	      img1Url = "assets/img/portfolio/Video Player.jpg";
	      img2Url = "assets/img/portfolio/Video Player.jpg";
	      img3Url = "assets/img/portfolio/Video Player.jpg";
	    
	      projectName = " Video Player";
	      category = " Mobile Application";
	      client = " United States";
	      description = "It's a video player application who helps the user to play their videos.";

	      break;

    }
    case "sloop": {

	      img1Url = "assets/img/portfolio/Sloop.jpg";
	      img2Url = "assets/img/portfolio/Sloop.jpg";
	      img3Url = "assets/img/portfolio/Sloop.jpg";
	    
	      projectName = " Sloop";
	      category = " Mobile Application";
	      client = " UK";
	      projectUrl = "https://youtu.be/PJYJQ3Kbqig";
	      description = "It's a social platform for students to pitch their ideas to the investors and interact with other students nearby your home location to contact them and can create their team for their ideas. Students can interact with other students as well investors";

	      break;   

    } 
    case "e_serve": {

	      img1Url = "assets/img/portfolio/e-serve-details.jpg";
	      img2Url = "assets/img/portfolio/e-serve-details.jpg";
	      img3Url = "assets/img/portfolio/e-serve-details.jpg";
	    
	      projectName = " E-Serve";
	      category = " Mobile Application";
	      client = " Lahore Garrison University, Pakistan";
	      description = "It's a service provider app which helps the users to find their mechanic within a 3km radius.";
	   
	   break;
    } 
    case "soft_jobs": {

	      img1Url = "assets/img/portfolio/Soft Jobs.jpg";
	      img2Url = "assets/img/portfolio/Soft Jobs.jpg";
	      img3Url = "assets/img/portfolio/Soft Jobs.jpg";
	    
	      projectName = " Soft Jobs";
	      category = " Mobile Application";
	      client = " Greenway Soft, Pakistan";
	      projectUrl = "https://play.google.com/store/apps/details?id=com.gwsoft.softjobs";
	      description = "Soft Jobs is the job portal application. In which companies will be registered and upload their jobs for the job-seekers. It can schedule their interviews for the employees and update the job application status. User can find their jobs easily by selecting their desired company.";

	      break;   
    }

}
    // Set slider images
    document.getElementById("img_1").src = img1Url;
    document.getElementById("img_2").src = img2Url;
    document.getElementById("img_3").src = img3Url;

    document.getElementById("category").innerHTML = category;  
    document.getElementById("client").innerHTML = client;
    document.getElementById("project_url").href = projectUrl;
    document.getElementById("project_url").innerHTML = projectName;  
    document.getElementById("project_details").innerHTML = description;

}
