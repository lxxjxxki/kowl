const menu_icon = document.getElementById('menu_icon');
const hidden_menu_rectangle = document.getElementById('hidden_menu_rectangle');
const hidden_menu_icon = document.getElementById('hidden_menu_icon');
const hidden_shop_link = document.getElementById('hidden_shop_link');
const hidden_archive_link = document.getElementById('hidden_archive_link');
const hidden_instagram_logo_link = document.getElementById('hidden_instagram_logo_link');
const hidden_X_image = document.getElementById('hidden_X_image');
const button = document.getElementById('button');

menu_icon.addEventListener("mouseenter",function(){
    hidden_X_image.style.display = "block";
    hidden_menu_rectangle.style.display = "block";
    hidden_menu_icon.style.display = "block";
    hidden_shop_link.style.display = "block";
    hidden_archive_link.style.display = "block";
    hidden_instagram_logo_link.style.display = "block";
    button.style.display = "block";
    hidden_X_image.style.display = "block";

});

hidden_X_image.addEventListener("click", function(){
    hidden_X_image.style.display = "none";
    hidden_menu_rectangle.style.display = "none";
    hidden_menu_icon.style.display = "none";
    hidden_shop_link.style.display = "none";
    hidden_archive_link.style.display = "none";
    hidden_instagram_logo_link.style.display = "none";
    button.style.display = "none";
    hidden_X_image.style.display = "none";
});