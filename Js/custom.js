$(document).ready(function(){
    $(document).on("click", ".back-top", function() {
        $("html, body").animate({scrollTop:0}, "300");
        return false;
    });

    $(document).on("click", ".nav-btn", function() {
        $(".nav-sm").toggle();
    });

    // Show list menu item
    let listMenu = [
        {
            id: 1,
            img: "../../Assets/img/menu-item1.png",
            title: "Lasagne al Forno"
        },
        {
            id: 2,
            img: "../../Assets/img/menu-item2.png",
            title: "Lasagne al Forno"
        },
        {
            id: 3,
            img: "../../Assets/img/menu-item3.png",
            title: "Lasagne al Forno"
        },
        {
            id: 4,
            img: "../../Assets/img/menu-item.jpg",
            title: "Lasagne al Forno"
        },
        {
            id: 5,
            img: "../../Assets/img/menu-item5.png",
            title: "Lasagne al Forno"
        },
        {
            id: 6,
            img: "../../Assets/img/menu-item6.png",
            title: "Lasagne al Forno"
        },
        {
            id: 7,
            img: "../../Assets/img/menu-item6.png",
            title: "Lasagne al Forno"
        },
        {
            id: 8,
            img: "../../Assets/img/menu-item6.png",
            title: "Lasagne al Forno"
        },
        {
            id: 9,
            img: "../../Assets/img/menu-item6.png",
            title: "Lasagne al Forno"
        },
        {
            id: 10,
            img: "../../Assets/img/menu-item6.png",
            title: "Lasagne al Forno"
        }
    ];
    let viewMenu = '';
    for(let i = 0; i < listMenu.length; i++) {
        let obj = listMenu[i];
        let menu = `<div class="col-md-6 col-lg-4 col-sm-12">
                        <div class="menu-item">
                            <a href="#" class="menu-img">
                                <img src="${obj.img}" alt="">
                            </a>
                            <div class="menu-title">
                                <h3><a href="#">${obj.title}</a></h3>
                            </div>
                        </div>
                    </div>`;
        viewMenu += menu;            
    }
    $(".menu-list").html(viewMenu);

    // Show gallery item
    let listGallery = [
        {
            id: 1,
            img: "../../Assets/img/gallery-item.jpg",
        },
        {
            id: 2,
            img: "../../Assets/img/gallery-item2.png"
        },
        {
            id: 3,
            img: "../../Assets/img/gallery-item3.png"
        },
        {
            id: 4,
            img: "../../Assets/img/gallery-item4.png"
        },
        {
            id: 5,
            img: "../../Assets/img/gallery-item5.png"
        },
        {
            id: 6,
            img: "../../Assets/img/gallery-item6.png"
        },
        {
            id: 7,
            img: "../../Assets/img/gallery-item7.png"
        },
        {
            id: 8,
            img: "../../Assets/img/gallery-item8.png"
        },
        {
            id: 9,
            img: "../../Assets/img/gallery-item.jpg",
        },
        {
            id: 10,
            img: "../../Assets/img/gallery-item2.png"
        },
        {
            id: 11,
            img: "../../Assets/img/gallery-item3.png"
        },
        {
            id: 12,
            img: "../../Assets/img/gallery-item4.png"
        },
        {
            id: 13,
            img: "../../Assets/img/gallery-item.jpg",
        },
        {
            id: 14,
            img: "../../Assets/img/gallery-item2.png"
        },
        {
            id: 15,
            img: "../../Assets/img/gallery-item3.png"
        },
        {
            id: 16,
            img: "../../Assets/img/gallery-item4.png"
        },
        {
            id: 7,
            img: "../../Assets/img/gallery-item7.png"
        },
        {
            id: 8,
            img: "../../Assets/img/gallery-item8.png"
        }
    ];
    let viewGallery = '';
    for(let i = 0; i < listGallery.length; i++) {
        let obj = listGallery[i];
        let gallery = `<div class="col-md-4 col-lg-3 col-sm-6">
                        <div class="gallery-item">
                            <a href="#" class="gallery-img">
                                <img src="${obj.img}" alt="">
                            </a>
                        </div>
                    </div>`;
        viewGallery += gallery;            
    }
    $(".gallery-list").html(viewGallery);

    // Pagination-Gallery
    let numberOfItems = listGallery.length;
    let limitPerPage;
    if($(window).width() < 768) {
        limitPerPage = 4;
    } else if($(window).width() >= 768 && $(window).width() < 992) {
        limitPerPage = 6;
    } else if($(window).width() >= 992){
        limitPerPage = 8;
    }

    $(".gallery-item:gt(" + (limitPerPage - 1) + ")").hide();
    let totalPages = Math.ceil(numberOfItems / limitPerPage);

    $("#pagination-gallery").append('<li id="first-page"><a href="javascript:void(0)"><i class="fa-solid fa-angles-left" aria-hidden="true"></i></a></li>');
    $("#pagination-gallery").append('<li id="prev-page"><a href="javascript:void(0)"><i class="fa-solid fa-angle-left" aria-hidden="true"></i></a></li>');

    $("#pagination-gallery").append('<li class="current-page page-active"><a href="javascript:void(0)">' + 1 + '</a></li>');
    for(let i = 2; i <= totalPages; i++) {
        $("#pagination-gallery").append('<li class="current-page"><a href="javascript:void(0)">' + i + '</a></li>');
    }

    $("#pagination-gallery").append('<li id="next-page"><a href="javascript:void(0)"><i class="fa-solid fa-angle-right" aria-hidden="true"></i></a></li>');
    $("#pagination-gallery").append('<li id="last-page"><a href="javascript:void(0)"><i class="fa-solid fa-angles-right" aria-hidden="true"></i></a></li>');

    $("#pagination-gallery li.current-page").on("click", function(){
        if($(this).hasClass("page-active")) {
            return false;
        } else {
            let currentPage = $(this).index() - 1;
            $("#pagination-gallery li").removeClass("page-active");
            $(this).addClass("page-active");
            $(".gallery-item").hide();

            let grandTotal = limitPerPage * currentPage;
            for(let i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(".gallery-item:eq(" + i + ")").show();
            }
        }
    });
    
    $("#next-page").on("click", function(){
        let currentPage =  $("#pagination-gallery li.page-active").index() - 1;
        if(currentPage === totalPages) {
            return false;
        } else {
            currentPage++;
            $("#pagination-gallery li").removeClass("page-active");
            $(".gallery-item").hide();

            let grandTotal = limitPerPage * currentPage;
            for(let i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(".gallery-item:eq(" + i + ")").show();
            }
            $("#pagination-gallery li.current-page:eq(" + (currentPage - 1) + ")").addClass("page-active")
        }
    });

    $("#prev-page").on("click", function(){
        let currentPage =  $("#pagination-gallery li.page-active").index() - 1;
        if(currentPage === 1) {
            return false;
        } else {
            currentPage--;
            $("#pagination-gallery li").removeClass("page-active");
            $(".gallery-item").hide();

            let grandTotal = limitPerPage * currentPage;
            for(let i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(".gallery-item:eq(" + i + ")").show();
            }
            $("#pagination-gallery li.current-page:eq(" + (currentPage - 1) + ")").addClass("page-active")
        }
    });

    $("#last-page").on("click", function(){
        let currentPage =  $("#pagination-gallery li.page-active").index() - 1;
        if(currentPage === totalPages) {
            return false;
        } else {
            currentPage = totalPages;
            $("#pagination-gallery li").removeClass("page-active");
            $(".gallery-item").hide();

            let grandTotal = limitPerPage * currentPage;
            for(let i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(".gallery-item:eq(" + i + ")").show();
            }
            $("#pagination-gallery li.current-page:eq(" + (currentPage - 1) + ")").addClass("page-active")
        }
    });

    $("#first-page").on("click", function(){
        let currentPage =  $("#pagination-gallery li.page-active").index() - 1;
        if(currentPage === 1) {
            return false;
        } else {
            currentPage = 1;
            $("#pagination-gallery li").removeClass("page-active");
            $(".gallery-item").hide();

            let grandTotal = limitPerPage * currentPage;
            for(let i = grandTotal - limitPerPage; i < grandTotal; i++) {
                $(".gallery-item:eq(" + i + ")").show();
            }
            $("#pagination-gallery li.current-page:eq(" + (currentPage - 1) + ")").addClass("page-active")
        }
    });

    // Pagination Menu
    let numberOfItemsM = listMenu.length;
    let limitPerPageM;
    if($(window).width() < 768) {
        limitPerPageM = 2;
    } else if($(window).width() >= 768 && $(window).width() < 992) {
        limitPerPageM = 4;
    } else if($(window).width() >= 992){
        limitPerPageM = 6;
    }

    $(".menu-item:gt(" + (limitPerPageM - 1) + ")").hide();
    let totalPagesM = Math.ceil(numberOfItemsM / limitPerPageM);

    $("#pagination-menu").append('<li id="first-page"><a href="javascript:void(0)"><i class="fa-solid fa-angles-left" aria-hidden="true"></i></a></li>');
    $("#pagination-menu").append('<li id="prev-page"><a href="javascript:void(0)"><i class="fa-solid fa-angle-left" aria-hidden="true"></i></a></li>');

    $("#pagination-menu").append('<li class="current-page page-active"><a href="javascript:void(0)">' + 1 + '</a></li>');
    for(let i = 2; i <= totalPagesM; i++) {
        $("#pagination-menu").append('<li class="current-page"><a href="javascript:void(0)">' + i + '</a></li>');
    }

    $("#pagination-menu").append('<li id="next-page"><a href="javascript:void(0)"><i class="fa-solid fa-angle-right" aria-hidden="true"></i></a></li>');
    $("#pagination-menu").append('<li id="last-page"><a href="javascript:void(0)"><i class="fa-solid fa-angles-right" aria-hidden="true"></i></a></li>');

    $("#pagination-menu li.current-page").on("click", function(){
        if($(this).hasClass("page-active")) {
            return false;
        } else {
            let currentPage = $(this).index() - 1;
            $("#pagination-menu li").removeClass("page-active");
            $(this).addClass("page-active");
            $(".menu-item").hide();

            let grandTotal = limitPerPageM * currentPage;
            for(let i = grandTotal - limitPerPageM; i < grandTotal; i++) {
                $(".menu-item:eq(" + i + ")").show();
            }
        }
    });
    
    $("#next-page").on("click", function(){
        let currentPageM =  $("#pagination-menu li.page-active").index() - 1;
        if(currentPageM === totalPagesM) {
            return false;
        } else {
            currentPageM++;
            $("#pagination-menu li").removeClass("page-active");
            $(".menu-item").hide();

            let grandTotal = limitPerPageM * currentPageM;
            for(let i = grandTotal - limitPerPageM; i < grandTotal; i++) {
                $(".menu-item:eq(" + i + ")").show();
            }
            $("#pagination-menu li.current-page:eq(" + (currentPageM - 1) + ")").addClass("page-active")
        }
    });

    $("#prev-page").on("click", function(){
        let currentPageM =  $("#pagination-menu li.page-active").index() - 1;
        if(currentPageM === 1) {
            return false;
        } else {
            currentPageM--;
            $("#pagination-menu li").removeClass("page-active");
            $(".menu-item").hide();

            let grandTotal = limitPerPageM * currentPageM;
            for(let i = grandTotal - limitPerPageM; i < grandTotal; i++) {
                $(".menu-item:eq(" + i + ")").show();
            }
            $("#pagination-menu li.current-page:eq(" + (currentPageM - 1) + ")").addClass("page-active")
        }
    });

    $("#last-page").on("click", function(){
        let currentPageM =  $("#pagination-menu li.page-active").index() - 1;
        if(currentPageM === totalPagesM) {
            return false;
        } else {
            currentPageM = totalPagesM;
            $("#pagination-menu li").removeClass("page-active");
            $(".menu-item").hide();

            let grandTotal = limitPerPageM * currentPageM;
            for(let i = grandTotal - limitPerPageM; i < grandTotal; i++) {
                $(".menu-item:eq(" + i + ")").show();
            }
            $("#pagination-menu li.current-page:eq(" + (currentPageM - 1) + ")").addClass("page-active")
        }
    });

    $("#first-page").on("click", function(){
        let currentPageM =  $("#pagination-menu li.page-active").index() - 1;
        if(currentPageM === 1) {
            return false;
        } else {
            currentPageM = 1;
            $("#pagination-menu li").removeClass("page-active");
            $(".menu-item").hide();

            let grandTotal = limitPerPageM * currentPageM;
            for(let i = grandTotal - limitPerPageM; i < grandTotal; i++) {
                $(".menu-item:eq(" + i + ")").show();
            }
            $("#pagination-menu li.current-page:eq(" + (currentPageM - 1) + ")").addClass("page-active")
        }
    });
});

