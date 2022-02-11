window.addEventListener("load", function () {
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    const btnRight = $('.slider__btn-right')
    const btnLeft = $('.slider__btn-left')
    // const bannerActive = document.querySelector('.banner.banner--active')
    const banners = $$('.banner')
    const banner = $('.banner.banner--active')
    const bannerImg = $('.banner__img')
    const selectAuthform = $('.header__user')
    const  overlay = $('.overlay')
    console.log(overlay)
    const app = {
        currentIndex: 0,
        handleEvent: function () {
            const _this = this
            // bannerImg.animate([
            //     {tranform:'scale()1.2'}
            // ])
            btnRight.onclick = function () {
                banners[_this.currentIndex].classList.remove('banner--active')

                _this.currentIndex++
                if (_this.currentIndex >= banners.length) {
                    _this.currentIndex = 0
                }

                banners[_this.currentIndex].classList.add('banner--active')

            }
           
        },
        autoBanner: function(){
            setInterval(()=>{
                banners[this.currentIndex].classList.remove('banner--active')
                this.currentIndex++
                if (this.currentIndex >= banners.length) {
                    this.currentIndex = 0
                }
                banners[this.currentIndex].classList.add('banner--active')
            },5000)
        },
        selectUser: function(){
            selectAuthform.onclick = function (){
                overlay.classList.add('active')
            }
            overlay.onclick= function(){
                // overlay.classList.remove('active')
            }
        },
        start: function () {
            this.handleEvent()
            this.autoBanner()
            this.selectUser()
        },
    }
    app.start()
})