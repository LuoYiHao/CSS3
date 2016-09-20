var curIndex = 1;
function next() {
	if(curIndex == 6)
		return;
	var curPage = document.getElementById("page" + curIndex);
	curPage.style.transform = "rotateX(-90deg)";
	curIndex++;
	var nextPage = document.getElementById("page" + curIndex);
	nextPage.style.transform = "rotateX(0deg)";
}
function pre() {
	if(curIndex == 1)
		return;
	var curPage = document.getElementById("page" + curIndex);
	curPage.style.transform = "rotateX(90deg)";
	curIndex--;
	var nextPage = document.getElementById("page" + curIndex);
	nextPage.style.transform = "rotateX(0deg)";
}