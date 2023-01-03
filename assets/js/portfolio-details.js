function saveValue(projectName) {


    localStorage.setItem("selected_project", projectName);


}

function getDetails(selectedProject) {


    var img1Url,
    img2Url,
    img3Url,
    projectName,
    category,
    client,
    videoUrl = "",
    playstoreUrl = "",
    description;

    var map = new Map();
    
    switch(selectedProject) {
    case "portfolio_1": {

        img1Url = "assets/img/portfolio/portfolio-details-1.1.jpg";
        img2Url = "assets/img/portfolio/portfolio-details-1.2.jpg";
        img3Url = "assets/img/portfolio/portfolio-details-1.3.jpg";
        
        projectName = " ELPR"
        category = " Mobile Application";
        client = " United States";
        videoUrl = "";
        playstoreUrl = "";
        description = "ELPR(Emergency Locator for Public Rescue) is an emergency service provider application that is design specially for public.";

        break;
    }
case "portfolio_2": {

    img1Url = "assets/img/portfolio/portfolio-details-6.1.jpg";
    img2Url = "assets/img/portfolio/e-serve-details-6.2.jpg";
    img3Url = "assets/img/portfolio/e-serve-details-6.3.jpg";
    
    projectName = " E-Serve";
    category = " Mobile Application";
    client = " Lahore Garrison University, Pakistan";
    videoUrl = "";
    playstoreUrl = "";
    description = "It's a service provider app which helps the users to find their mechanic within a 3km radius.";
    
    break;
}
case "portfolio_3": {

    img1Url = "assets/img/portfolio/portfolio-details-7.1.jpg";
    img2Url = "assets/img/portfolio/portfolio-details-7.2.jpg";
    img3Url = "assets/img/portfolio/portfolio-details-7.3.jpg";
    
    projectName = " Soft Jobs";
    category = " Mobile Application";
    client = " Greenway Soft, Pakistan";
    playstoreUrl = "https://play.google.com/store/apps/details?id=com.gwsoft.softjobs";
    description = "Soft Jobs is the job portal application. In which companies will be registered and upload their jobs for the job-seekers. It can schedule their interviews for the employees and update the job application status. User can find their jobs easily by selecting their desired company.";

    break;   
}
case "portfolio_4": {

    img1Url = "assets/img/portfolio/portfolio-details-2.1.jpg";
    img2Url = "assets/img/portfolio/portfolio-details-2.2.jpg";
    img3Url = "assets/img/portfolio/portfolio-details-2.3.jpg";

    projectName = " Kidos"
    category = " Mobile Application";
    client = " IDZ Cunsultancy, Isreal";
    videoUrl = "https://youtu.be/AKNkJSnxq94";
    playstoreUrl = "";
    description = "Kidos is a online nursery management application.";

    break;
} 
case "portfolio_5": {

    img1Url = "assets/img/portfolio/portfolio-details-3.1.jpg";
    img2Url = "assets/img/portfolio/portfolio-details-3.2.jpg";
    img3Url = "assets/img/portfolio/portfolio-details-3.3.jpg";
    
    projectName = " Sports Court";
    category = " Mobile Application";
    client = " Lahore Garrison University, Pakistan";
    videoUrl = "https://youtu.be/tY0Oxuc_7YQ";
    playstoreUrl = "";
    description = "Sport Court is an online sports booking application in which users can book sports-related venues in their comfort zone where they want, share skills with others, get match updates, and can take part in the events that will be organized by the courts owner. This will be beneficial for all users and courts owner. ";
    
    break;

} 
case "portfolio_6": {

    img1Url = "assets/img/portfolio/portfolio-details-5.1.jpg";
    img2Url = "assets/img/portfolio/portfolio-details-5.2.jpg";
    img3Url = "assets/img/portfolio/portfolio-details-5.3.jpg";
    
    projectName = " Sloop";
    category = " Mobile Application";
    client = " UK";
    videoUrl = "https://youtu.be/PJYJQ3Kbqig";
    playstoreUrl = "";
    description = "It's a social platform for students to pitch their ideas to the investors and interact with other students nearby your home location to contact them and can create their team for their ideas. Students can interact with other students as well investors";

    break;   
} 
case "7": {

    img1Url = "assets/img/portfolio/portfolio-details-4.1.jpg";
    img2Url = "assets/img/portfolio/portfolio-details-4.2.jpg";
    img3Url = "assets/img/portfolio/portfolio-details-4.3.jpg";
    
    projectName = " Video Player";
    category = " Mobile Application";
    client = " United States";
    videoUrl = "";
    playstoreUrl = "";
    description = "It's a video player application who helps the user to play their videos.";

    break;

}

}

map.set('image_url_1', img1Url);
map.set('image_url_2', img2Url);
map.set('image_url_3', img3Url);
map.set('project_name', projectName);
map.set('category', category);
map.set('client', client);
map.set('video_url', videoUrl);
map.set('playstore_url', playstoreUrl);
map.set('desc', description);

return map;

}

function showDetails() {

  // Get value from local storage
    var map = getDetails(localStorage.getItem("selected_project"));


    // Set slider images
    document.getElementById("img_1").src = map.get('image_url_1');
    document.getElementById("img_2").src = map.get('image_url_2');
    document.getElementById("img_3").src = map.get('image_url_3');

    document.getElementById("category").innerHTML = map.get('category');  
    document.getElementById("client").innerHTML = map.get('client');
    document.getElementById("project_url").href = map.get('video_url');
    document.getElementById("project_url").innerHTML = map.get('playstore_url');  
    document.getElementById("project_details").innerHTML = map.get('desc');

}


function openVideo(selectedProject) {

    var map = getDetails(selectedProject);
    var videoUrl = map.get('video_url');

    if (videoUrl) {
        window.open(videoUrl, "_blank");
    }


}

function openPlaystore(selectedProject) {

    var map = getDetails(selectedProject);
    var videoUrl = map.get('playstore_url');

    if (videoUrl) {
        window.open(videoUrl, "_blank");
    }


}

