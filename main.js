(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var src_app_gaurds_auth_gaurd_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/gaurds/auth-gaurd/auth-gaurd.service */ "./src/app/gaurds/auth-gaurd/auth-gaurd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
        canActivate: [src_app_gaurds_auth_gaurd_auth_gaurd_service__WEBPACK_IMPORTED_MODULE_6__["AuthGaurdService"]]
    },
    {
        path: 'login',
        component: src_app_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'sign-up',
        component: src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-top\">\n  <!-- <a class=\"navbar-brand\" href=\"#\">Angular</a> -->\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarsDefault\"\n    aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <!-- <a class=\"nav-link\" [routerLink]='[\"/login\"]'>Login</a> -->\n  <!-- <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarsDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"id01\" href=\"#\" ngbDropdownToggle>Files</a>\n\n        <div class=\"dropdown-menu\" aria-labelledby=\"id01\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"#\">HTML</a>\n          <a class=\"dropdown-item\" href=\"#\">TS</a>\n          <a class=\"dropdown-item\" href=\"#\">JS</a>\n        </div>\n      </li>\n    </ul>\n  </div> -->\n</nav>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/comments/comments.component */ "./src/app/components/comments/comments.component.ts");
/* harmony import */ var _services_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/shared/auth.service */ "./src/app/services/shared/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/firebase.config */ "./src/environments/firebase.config.ts");
/* harmony import */ var angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/database-deprecated */ "./node_modules/angularfire2/database-deprecated/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var src_app_services_article_article_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/article/article.service */ "./src/app/services/article/article.service.ts");
/* harmony import */ var src_app_services_comments_comments_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/comments/comments.service */ "./src/app/services/comments/comments.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { AngularFireLite } from 'angularfire-lite';













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_article_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"],
                _components_comments_comments_component__WEBPACK_IMPORTED_MODULE_0__["CommentsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                src_app_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_firebase_config__WEBPACK_IMPORTED_MODULE_9__["firebaseConfig"]),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot()
            ],
            providers: [
                _services_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                src_app_services_comments_comments_service__WEBPACK_IMPORTED_MODULE_17__["CommentsService"],
                src_app_services_article_article_service__WEBPACK_IMPORTED_MODULE_16__["ArticleService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blog-content-container {\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\r\n  margin-top: 7%;\r\n  padding: 2%;\r\n}\r\n.blog-article-title {\r\n  font-family: 'Fjord One', serif;\r\n  font-size: 36px;\r\n  margin-bottom: 15px;\r\n  color: #0e0e0e;\r\n}\r\n.blog-article-content {\r\n  font-size: 18px;\r\n  line-height: 2;\r\n}"

/***/ }),

/***/ "./src/app/components/article/article.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/article/article.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <div fxFlex></div>\n  <div fxFlex=\"75%\" class=\"blog-content-container\">\n    <div class=\"blog-article-title\">\n      {{articleData?.title}}\n    </div>\n    <div class=\"blog-article-content\">\n      {{articleData?.content}}\n    </div>\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_article_article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/article/article.service */ "./src/app/services/article/article.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as articles from 'src/model/articles.json';
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(articleService) {
        this.articleService = articleService;
        this.articles = {
            "id": 1,
            "title": "AI and Neuroscience: A virtuous circle",
            "content": [
                "At DeepMind, we argue that despite rapid progress in both fields, researchers should not lose sight of this vision. We urge researchers in neuroscience and AI to find a common language, allowing a free flow of knowledge that will allow continued progress on both fronts.",
                "We believe that drawing inspiration from neuroscience in AI research is important for two reasons. First, neuroscience can help validate AI techniques that already exist. Put simply, if we discover one of our artificial algorithms mimics a function within the brain, it suggests our approach may be on the right track. Second, neuroscience can provide a rich source of inspiration for new types of algorithms and architectures to employ when building artificial brains. Traditional approaches to AI have historically been dominated by logic-based methods and theoretical mathematical models. We argue that neuroscience can complement these by identifying classes of biological computation that may be critical to cognitive function. ",
                "Take one recent example of a seminal finding in neuroscience: the discovery of offline experience “replay”. During sleep or quiet resting, biological brains “replay” temporal patterns of neuronal activity that were produced in an earlier active period. For example, when rats run through a maze, “place” cells activate as the animal moves around. During rest, the same sequence of neuronal activity is observed, as if the rats were mentally reimagining their past movements, and using them to optimise future behaviour. In fact, it has been shown that interfering with replay impairs performance when they later perform the same tasks.",
                "At first glance, it might seem counterintuitive to build an artificial agent that needs to ‘sleep’ - after all, they are supposed to grind away at a computational problem long after their programmers have gone to bed. But this principle was a key part of our deep-Q network (DQN), an algorithm that learnt to master a diverse range of Atari2600 games to superhuman level with only the raw pixels and score as inputs. DQN mimics “experience replay”, by storing a subset of training data that it reviews “offline”, allowing it to learn anew from successes or failures that occurred in the past.",
                "Successes like this give us confidence that neuroscience is already an important source of ideas for AI. But looking forward, we believe it will become indispensable in helping us tackle unsolved questions, such as those concerning efficient learning, understanding of the physical world, and imagination.",
                "Imagination is a hugely important function for humans and animals, allowing us to plan for future scenarios without taking action; something that may come at a cost.  Consider a simple example, such as planning a holiday. In order to do this we leverage our knowledge - or “model” - of the world and use it to project forward in time, evaluating future states, and allowing us to calculate the route we need to take or what clothes to pack for sunny weather. Cutting-edge research in human neuroscience is starting to unveil the computational and systems mechanisms that underpin this kind of thinking, but much of this new understanding has yet to be incorporated into artificial models.",
                "Another key challenge in contemporary AI research is known as transfer learning. To be able to deal effectively with novel situations, artificial agents need the ability to build on existing knowledge to make sensible decisions. Humans are already good at this - an individual who can drive a car, use a laptop or chair a meeting are usually able to cope even when confronted by an unfamiliar vehicle, operating system or social situation.",
                "Researchers are now starting to take the first steps towards understanding how this might be possible in artificial systems. For example, a new class of network architecture known as a “progressive network” can use knowledge learned in one video game to learn another. The same architecture has also been shown to transfer knowledge from a simulated robotic arm to a real-world arm, massively reducing the training time. Intriguingly, these networks bear some similarities to models of sequential task learning in humans. These tantalising links suggest that there are great opportunities for future AI research to learn from work in neuroscience.",
                "But this exchange of knowledge cannot be a one-way street. Neuroscience can also benefit from AI research. Take the idea of reinforcement learning - one of the central approaches in contemporary AI research. Although the original idea came from theories of animal learning in psychology, it was developed and elaborated by machine learning researchers.  These later ideas fed back into neuroscience to help us understand neurophysiological phenomena, such as the firing properties of dopamine neurons in the mammalian basal ganglia.",
                "This back and forth is essential if both fields are to continue to build on each other’s insights, creating a virtuous circle whereby AI researchers use ideas from neuroscience to build new technology, and neuroscientists learn from the behaviour of artificial agents to better interpret biological brains. Indeed, this cycle will likely accelerate thanks to recent advances, such as optogenetics, that allow us to precisely measure and manipulate brain activity, yielding vast quantities of data that can be analysed with tools from machine learning.",
                "We therefore believe distilling intelligence into algorithms and comparing them to the human brain is now vital. Not only could it bolster our quest to develop AI, a tool that we hope will create new knowledge and push forward scientific discovery, but may also allow us to better understand what’s going on inside our own heads. That could shed light on some of the most enduring mysteries in neuroscience, such as the nature of creativity, dreams and, perhaps one day, even consciousness. With so much at stake, the need for the field of neuroscience and AI to come together is now more urgent than ever before."
            ]
        };
    }
    ArticleComponent.prototype.ngOnInit = function () {
        // this.articleService.getArticleData().subscribe(data => console.log(data));
        this.articleData = this.articles;
        // console.log('articles', articles);
        // console.log(this.articleData);
    };
    ArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/components/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [_services_article_article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/comments/comments.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/comments/comments.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".comment-box textarea {\r\n  resize: none;\r\n  width: 65%;\r\n  height: 100px;\r\n  outline: none;\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  overflow: hidden;\r\n}\r\n.comment-box {\r\n  margin-top: 5%;\r\n}\r\n.submit-button {\r\n  background-color: #90b4da;\r\n  color: #fff;\r\n  border-width: 1px;\r\n  border-color: black;\r\n  width: 10%;\r\n  font-size: 15px;\r\n  height: 30px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  margin-left: 55%;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  border: 1px solid #999999;\r\n  background-color: #cccccc;\r\n  color: #666666;\r\n  border-radius: 6px;\r\n  cursor: not-allowed;\r\n}\r\n.comment {\r\n  background-color: #fff;\r\n  width: 53%;\r\n  border-radius: 20px;\r\n  border: 1px solid black;\r\n  padding: 10px;\r\n  margin-top: 15px;\r\n}\r\n.comments {\r\n  margin-left: 16%;\r\n}\r\n.comment-name {\r\n  font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/comments/comments.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/comments/comments.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\n  <div fxFlex></div>\n  <div fxFlex=\"75%\" class=\"comment-container\">\n    <div class=\"comment-box\">\n      <textarea [(ngModel)]='comment' [placeholder]='placeholderText'></textarea>\n    </div>\n    <div class=\"comment-submit\">\n      <button [disabled]='!comment' class=\"submit-button\" (click)='submitComment()'>Comment</button>\n    </div>\n  </div>\n  <div fxFlex></div>\n</div>\n<div class=\"comments\">\n  <div *ngFor='let comment of comments' class=\"comment\">\n    <div class=\"comment-name\">{{comment?.name + ':'}}</div>\n    <div class=\"comment-text\">{{comment?.text}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/comments/comments.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/comments/comments.component.ts ***!
  \***********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _services_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shared/auth.service */ "./src/app/services/shared/auth.service.ts");
/* harmony import */ var angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database-deprecated */ "./node_modules/angularfire2/database-deprecated/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(db, authService, firebaseApp, changeDetector) {
        this.db = db;
        this.authService = authService;
        this.firebaseApp = firebaseApp;
        this.changeDetector = changeDetector;
        this.placeholderText = '';
    }
    CommentsComponent.prototype.submitComment = function () {
        var user = this.authService.getCurrentUser();
        this.ref.child('/comments').push({ name: user['email'], text: this.comment });
    };
    CommentsComponent.prototype.ngOnInit = function () {
        this.comments = [];
        this.getComments();
        this.ref = this.firebaseApp.database().ref();
    };
    CommentsComponent.prototype.getComments = function () {
        var _this = this;
        var ref2 = this.firebaseApp.database().ref().child('/comments');
        ref2.on('value', function (snapshot) {
            snapshot.forEach(function (item) {
                _this.comments.push(item.val());
            });
            _this.changeDetector.detectChanges();
            console.log(_this.comments);
        }, function (error) {
            console.log('Error: ' + error.code);
        });
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/components/comments/comments.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"],
            _services_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            angularfire2__WEBPACK_IMPORTED_MODULE_3__["FirebaseApp"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n  color: #000000;\r\n}\r\n.pointer {\r\n  cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary fixed-top\">\n  <!-- <a class=\"navbar-brand\" href=\"#\">Angular</a> -->\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" data-target=\"#navbarsDefault\"\n    aria-controls=\"navbarsDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"nav-link pointer\" (click)='logout()'>Logout</a>\n  <!-- <div [ngbCollapse]=\"isNavbarCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarsDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" id=\"id01\" href=\"#\" ngbDropdownToggle>Files</a>\n\n        <div class=\"dropdown-menu\" aria-labelledby=\"id01\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"#\">HTML</a>\n          <a class=\"dropdown-item\" href=\"#\">TS</a>\n          <a class=\"dropdown-item\" href=\"#\">JS</a>\n        </div>\n      </li>\n    </ul>\n  </div> -->\n</nav>\n<app-article></app-article>\n<app-comments></app-comments>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.isNavbarCollapsed = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);\r\n  margin-top: 7%;\r\n  padding: 2%;\r\n}\r\n.login-label {\r\n  color: #000000;\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  text-align: center;\r\n}\r\n.form-input {\r\n  margin: 20px 10%;\r\n}\r\n.form-input input {\r\n  width: 100%;\r\n  border: 1px solid #7777;\r\n  padding-left: 4px;\r\n  height: 40px;\r\n}\r\nbutton:disabled,\r\nbutton[disabled]{\r\n  border: 1px solid #999999;\r\n  background-color: #cccccc;\r\n  color: #666666;\r\n  cursor: not-allowed;\r\n  border-radius: 6px;\r\n}\r\n.login-button {\r\n  background-color: #90b4da;\r\n  color: #fff;\r\n  border-width: 1px;\r\n  border-color: black;\r\n  width: 60%;\r\n  font-size: 16px;\r\n  height: 30px;\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  margin-left: 20%;\r\n}\r\nsmall {\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div flexLayout=\"row\">\n  <div fxFlex></div>\n  <div fxFlex=\"35%\" class=\"login-form\">\n    <div class=\"login-label\">Login</div>\n    <form [formGroup]=\"loginForm\">\n      <div class=\"form-input\"><input type=\"email\" formControlName=\"email\" placeholder=\"Email\" required></div>\n      <div class=\"form-input\"><input type=\"password\" formControlName=\"password\" placeholder=\"Password\" required></div>\n      <div flexLayout=\"row\">\n        <div fxFlex='50%'>\n          <button class=\"login-button\" (click)='login()' [disabled]='!loginForm.valid'>Login</button>\n        </div>\n        <div fxFlex='50%'>\n          <button class=\"login-button\" (click)='register()' [disabled]='!loginForm.valid'>Sign Up</button>\n        </div>\n      </div>\n      <small>{{errorMessage}}</small>\n    </form>\n  </div>\n  <div fxFlex></div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database-deprecated */ "./node_modules/angularfire2/database-deprecated/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(af, db, router) {
        this.af = af;
        this.db = db;
        this.router = router;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.af.auth.signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
            .then(function (user) {
            console.log(user);
            localStorage.setItem('token', user.user.email);
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        // tslint:disable-next-line:max-line-length
        this.af.auth.createUserWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
            .then(function (user) {
            console.log(user);
            localStorage.setItem('token', user.user.email);
            _this.router.navigate(['/home']);
        })
            .catch(function (error) {
            _this.errorMessage = error.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_database_deprecated__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sign-up works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/gaurds/auth-gaurd/auth-gaurd.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/gaurds/auth-gaurd/auth-gaurd.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdService", function() { return AuthGaurdService; });
/* harmony import */ var _services_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shared/auth.service */ "./src/app/services/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurdService = /** @class */ (function () {
    function AuthGaurdService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "./src/app/services/article/article.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/article/article.service.ts ***!
  \*****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        // private endpoint = 'https://newsapi.org/v2/top-headlines?' +
        // 'country=us&' +
        // 'apiKey=884a04e85fa544c59b226d205b9d81d6';
        this.endpoint = '../../../model/articles.json';
    }
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/services/comments/comments.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/comments/comments.service.ts ***!
  \*******************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentsService = /** @class */ (function () {
    function CommentsService() {
    }
    CommentsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/services/shared/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shared/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(angularAuth) {
        var _this = this;
        this.angularAuth = angularAuth;
        this.currentUser = null;
        this.authState = this.angularAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        console.log('token', token);
        return (token && token.length > 0) ? true : false;
    };
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/environments/firebase.config.ts":
/*!*********************************************!*\
  !*** ./src/environments/firebase.config.ts ***!
  \*********************************************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyDC4vrKXPqc3cPms944bM78NChzsftYFd0',
    authDomain: 'sotheby-blog.firebaseapp.com',
    databaseURL: 'https://sotheby-blog.firebaseio.com',
    projectId: 'sotheby-blog',
    storageBucket: '',
    messagingSenderId: '716768264541'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\makurati\Documents\makurati\sotheby's\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map