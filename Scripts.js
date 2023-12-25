function toggleDropdown(contentID){
    //close any currently open dropdown content
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for(i=0; i<dropdowns.length; i++)
    {
        var openDropdown = dropdowns[i];
        if(openDropdown.id != contentID && openDropdown.style.display === 'block')
            openDropdown.style.display ='none';
    }

    //toggle the clicked dropdown
    var content = document.getElementById(contentID);
    if(content.style.displace == "block")
    {
        content.style.display ="none";
    }
    else{
        content.style.display = "block";
    }

}