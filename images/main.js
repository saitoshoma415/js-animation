let imagesItems = [...document.querySelectorAll(".img-wrap")];
// console.log(imagesItems);

let titles = [...document.querySelectorAll("h2")];

let titleMessage =document.querySelector(".title");

let options = {};

let setItemActive = (entries) => {
    console.log(entries);
    entries.map((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active")
        }
    });
};

let observer = new IntersectionObserver(setItemActive, options); //交差の監視して、閾値を過ぎたらコールバック関数が呼ばれる

imagesItems.map((item, index) => {
    console.log(item, index);
    //jsで楽にcssつけてるだけ。手動で１つずつつけても良い。でも要素名を変更するのが面倒臭いからこうしてる。
    item.children[0].style.backgroundImage = `url(../images/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    //
    observer.observe(item); //itemを常に監視する。
});

titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  observer.observe(title);
});


observer.observe(titleMessage);

