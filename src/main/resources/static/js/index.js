const menuIcon = document.getElementById('menuIcon');
const hiddenMenuRectangle = document.getElementById('hiddenMenuRectangle');
const hiddenMenuIcon = document.getElementById('hiddenMenuIcon');
const hiddenShopLink = document.getElementById('hiddenShopLink');
const hiddenArchiveLink = document.getElementById('hiddenArchiveLink');
const hiddenInstagramLogoLink = document.getElementById('hiddenInstagramLogoLink');
const hiddenXImage = document.getElementById('hiddenXImage');


const MenuIconElements = { menuIcon, hiddenMenuRectangle, hiddenMenuIcon, hiddenShopLink, hiddenArchiveLink, hiddenInstagramLogoLink, hiddenXImage };


menuIcon.addEventListener("mouseenter",function(){
    Object.values(MenuIconElements).forEach(element => {
        element.style.display = "block";
    });
    menuIcon.style.display = "none";
});

hiddenXImage.addEventListener("click", function(){
    Object.values(MenuIconElements).forEach(element => {
        element.style.display = "none";
    });
    menuIcon.style.display = "block";
});
