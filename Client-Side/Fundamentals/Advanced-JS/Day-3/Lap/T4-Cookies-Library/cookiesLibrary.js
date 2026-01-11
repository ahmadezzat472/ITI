function allCookieList() {
  var cookieList = [];
  var cookies = document.cookie;
  cookies.split(";").forEach(function (item) {
    cookieList.push(item.trim().split("="));
  });
  return cookieList;
}

function getCookie(cookieName) {
  var cookieList = allCookieList();
  for (var i in cookieList) {
    if (cookieList[i][0] == cookieName) return cookieList[i][1];
  }
  return null;
}

function hasCookie(cookieName) {
  return getCookie(cookieName) !== null;
}

function setCookie(cookieName, cookieValue, expiryDate) {
  var cookie = cookieName + "=" + cookieValue;
  if (expiryDate) cookie += ";expires=" + expiryDate;
  document.cookie = cookie;
}

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=;expires=" + new Date(0);
}
