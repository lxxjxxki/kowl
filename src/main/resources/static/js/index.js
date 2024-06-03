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

function getCartItemCount() {
    // 장바구니에 담긴 상품의 개수 계산
    var count = 0; // 0을 무조건 바꿔줘야함(JAVA - AJAX[yml])
    
    
    return count;
}

// 장바구니에 담긴 상품에 따라 표시되는 HTML 요소 선택
const cartNoInformation = document.getElementById('cartNoInformation');
const cartYesInformation = document.getElementById('cartYesInformation');

// 장바구니에 담긴 상품의 개수를 가져와서 조건부 렌더링
if (getCartItemCount() === 0) {
  cartNoInformation.style.display = 'block';
  cartYesInformation.style.display = 'none';
} else {
  cartNoInformation.style.display = 'none';
  cartYesInformation.style.display = 'block';
}

