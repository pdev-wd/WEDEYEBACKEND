(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-vendor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/contactinfo/contactinfo.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/contactinfo/contactinfo.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <!-- <img class=\"img_bg\" src=\"../../../assets/img/bg/4.jpg\" style=\"height: 400px;\" alt=\"\">\n  <div class=\"img_black\"style=\"height: 400px;\"></div> -->\n    <!-- <div class=\"page-header1 wedding\"style=\"height: 400px;\"> -->\n    <!-- <h1>WeddingDetails</h1> -->\n    <!-- </div> -->\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form *ngIf=\"contactInfoForm\" [formGroup]=\"contactInfoForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <p style=\"font-size:25px;font-weight: bold;padding:5px\">\n                                    You can input or change your Contact Info.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Contact Person Name</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"input your contact person name... *\" [formControl]=\"contactPersonName\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Contact Person Phone</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"input another number... *\" [formControl]=\"anotherNumber\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Web Site Url (Optional)</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"input your web site url... *\" [formControl]=\"websiteUrl\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-5\">\n                                <legend>Facebook Page Link (Optional)</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"input your facebook page link... *\" [formControl]=\"facebookPageLink\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-5\">\n                                <legend>Instagram Page Link (Optional)</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"input your instagram page link... *\" [formControl]=\"instagramPageLink\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Business Address</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"input your business address... *\" [formControl]=\"businessAddress\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <!-- <legend>City</legend> -->\n                                <!-- <mat-form-field  class=\"input-group\">\n                                    <input\n                                    type=\"text\"\n                                    matInput\n                                    placeholder=\"input your city... *\"\n                                    [formControl]=\"businessCity\">\n                                  </mat-form-field> -->\n                                <mat-form-field>\n                                    <mat-label>Select City</mat-label>\n                                    <mat-select [formControl]=\"businessCity\" [value]=\"businessCity.value\">\n                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">{{city.name}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <!-- <legend>Area</legend> -->\n                                <mat-form-field class=\"input-group\">\n                                    <!-- <input type=\"text\" matInput placeholder=\"input your area... *\" [formControl]=\"area\"> -->\n                                    <mat-select placeholder=\"Select Your Area/Locality\" name=\"area\" [formControl]=\"area\" [value]=\"currentVendor.area\">\n                                        <mat-option *ngFor=\"let location of locations\" [value]=\"location.name\">{{location.name}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <!-- <legend>Pincode</legend> -->\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"Pincode...\" [formControl]=\"pincode\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button mat-raised-button type=\"submit\" color=\"danger\" class=\"btn btn-danger btn-raised btn-round\">\n            Save Contact Info details\n          </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/leads/leads.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/leads/leads.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"page-categories\" style=\"width: 100%;\">\n                <!-- <h3 class=\"title text-center\"></h3> -->\n                <!-- <br /> -->\n                <ul class=\"nav nav-pills nav-pills-danger nav-pills-icons justify-content-center\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                            <i class=\"material-icons\">error_outline</i> All Leads\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                            <i class=\"material-icons\">history</i> Pending Leads\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                            <i class=\"material-icons\">check_circle_outline</i> Accepted Leads\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"tab-content tab-space tab-subcategories\">\n                    <div class=\"tab-pane\" id=\"link7\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-danger card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">how_to_vote</i>\n                                    </div>\n                                    <h4 class=\"card-title\">All Leads </h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                    <th>Status</th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                    <th>Status</th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody>\n                                                <tr *ngFor=\"let row of dataTable.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td>{{row[4]}}</td>\n                                                    <td>{{row[5]}}</td>\n                                                    <td>{{row[6]}}</td>\n                                                    <td>{{row[7]}}</td>\n                                                    <td *ngIf=\"row[8] == 'allow'\">\n                                                        <span style=\"padding: 7px;border-radius: 5px;background-color: green; color:white\">Allow</span>\n                                                    </td>\n                                                    <td *ngIf=\"row[8] != 'allow'\">\n                                                        <span style=\"padding: 7px;border-radius: 5px;background-color: red;color:white\">Pending</span>\n                                                    </td>\n                                                    <td class=\"text-right\">\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-success btn-just-icon like\"><i class=\"material-icons\"(click)=\"allowFunc(row[1],row[8],row[3],1)\">check_circle</i></a>\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-warning btn-just-icon later\"><i class=\"material-icons\" (click)=\"allowFunc(row[1],row[8],row[3],0)\">watch_later</i></a>\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\"(click)=\"delFunc(row[1],row[3])\">close</i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a target=\"_blank \" [routerLink]=\"['/vendor',curType,item._id]\">\n                                                                    <img alt=\"xxx\"  *ngIf=\"item.reqStatus == 'allow'\" src=\"assets/img/avatar/green_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                    <img alt=\"xxx\"  *ngIf=\"item.reqStatus != 'allow'\" src=\"assets/img/avatar/red_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a target=\"_blank \" class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} (Phone :{{item.phoneNumber}})\n                                                                            </a>\n                                                                            \n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span *ngIf=\"item.reqStatus == 'allow'\"style=\"padding: 7px;border-radius: 5px;background-color: green; color:white\">Allow</span>\n                                                                            <span *ngIf=\"item.reqStatus != 'allow'\"style=\"padding: 7px;border-radius: 5px;background-color: red; color:white\">Pending</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.additionalContent}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p>\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.reqStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.reqStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate,item.clientEmail, item.reqStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult\" (changePage)=\"onChangePage($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">error_outline</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane active\" id=\"link8\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-danger card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">how_to_vote</i>\n                                    </div>\n                                    <h4 class=\"card-title\">Pending Leads </h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables1\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody *ngIf=\"dataTable1 && dataTable1.dataRows\">\n                                                <tr *ngFor=\"let row of dataTable1.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td>{{row[4]}}</td>\n                                                    <td>{{row[5]}}</td>\n                                                    <td>{{row[6]}}</td>\n                                                    <td>{{row[7]}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult1.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems1;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a target=\"_blank \" [routerLink]=\"['/vendor',curType,item._id]\">\n                                                                    <img alt=\"xxx\"   src=\"assets/img/avatar/red_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a target=\"_blank \" class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} (Phone :{{item.phoneNumber}})\n                                                                            </a>\n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span style=\"padding: 7px;border-radius: 5px;background-color: red; color:white\">Pending</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.additionalContent}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p>\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.reqStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.reqStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate, item.clientEmail, item.reqStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult1\" (changePage)=\"onChangePage1($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult1.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">history</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"link9\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-danger card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">how_to_vote</i>\n                                    </div>\n                                    <h4 class=\"card-title\">Accepted Leads </h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables2\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Email</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th>MaxBudget</th>\n                                                    <th>Service</th>\n                                                    <th>Additional Content</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody *ngIf=\"dataTable2 && dataTable2.dataRows\">\n                                                <tr *ngFor=\"let row of dataTable2.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td>{{row[4]}}</td>\n                                                    <td>{{row[5]}}</td>\n                                                    <td>{{row[6]}}</td>\n                                                    <td>{{row[7]}}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult2.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems2;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a target=\"_blank \" [routerLink]=\"['/vendor',curType,item._id]\">\n                                                                    <img alt=\"xxx\"  src=\"assets/img/avatar/green_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a target=\"_blank \" class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} (Phone :{{item.phoneNumber}})\n                                                                            </a>\n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span style=\"padding: 7px;border-radius: 5px;background-color: green; color:white\">Allow</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.additionalContent}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p>\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.reqStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.reqStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate,item.clientEmail, item.reqStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult2\" (changePage)=\"onChangePage2($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult2.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">check_circle_outline</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/membershipplan/membershipplan.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/membershipplan/membershipplan.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 cards\">\n                        <div class=\"card card-pricing card-raised\">\n                            <!-- <div class=\"card card-pricing card-plain\"> -->\n                            <div class=\"card-body\" style=\"min-height: 486px;\" [ngStyle]=\"{'background-color': (currentObj.membership == '0') ? 'rgba(0,0,0,.04)':'rgb(255,255,255)' }\">\n                                <div style=\"margin:auto\">\n                                    <h6 class=\"card-category\">Free</h6>\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">weekend</i>\n                                    </div>\n                                    <h3 class=\"card-title\">FREE</h3>\n                                    <p class=\"card-description\">\n                                        By default...\n                                    </p>\n                                    <hr>\n                                    <a class=\"btn btn-white btn-round\" *ngIf=\"currentObj.membership == '0'\">Selected</a>\n                                    <a class=\"btn btn-white btn-round\" *ngIf=\"currentObj.membership != '0'\">Choose Plan</a>\n                                </div>\n\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 cards\">\n                        <div class=\"card card-pricing card-raised\">\n                            <div class=\"card-body\" style=\"min-height: 486px;\" [ngStyle]=\"{'background-color': (currentObj.membership == '1') ? 'rgba(0,0,0,.04)':'rgb(255,255,255)' }\">\n                                <h6 class=\"card-category\">Basic</h6>\n                                <div class=\"card-icon icon-rose\">\n                                    <i class=\"material-icons\">home</i>\n                                </div>\n                                <h3 class=\"card-title\">BASIC</h3>\n                                <p class=\"card-description\">\n                                    Upgrade to upper membership by making a payment and this payment should reflect in Payment tab of my business\n                                </p>\n                                <hr>\n                                <p class=\"card-description\">\n                                    Can Remove 2 Reviews.\n                                </p>\n                                <hr>\n                                <p>\n                                    Take precedence when searching.\n                                </p>\n                                <hr>\n                                <a href=\"#pablo\" class=\"btn btn-rose btn-round\" *ngIf=\"currentObj.membership == '1'\">Selected</a>\n                                <a href=\"#pablo\" class=\"btn btn-rose btn-round\" *ngIf=\"currentObj.membership != '1'\" (click)=\"getTotal(2100)\" data-toggle=\"modal\" data-target=\"#myLoginModal\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 cards\">\n                        <div class=\"card card-pricing card-raised\">\n                            <div class=\"card-body\" style=\"min-height: 486px;\" [ngStyle]=\"{'background-color': (currentObj.membership == '2') ? 'rgba(0,0,0,.04)':'rgb(255,255,255)' }\">\n                                <h6 class=\"card-category\">Premium</h6>\n                                <div class=\"card-icon icon-success\">\n                                    <i class=\"material-icons\">extension</i>\n                                </div>\n                                <h3 class=\"card-title\">PREMIUM</h3>\n                                <p class=\"card-description\">\n                                    In this membership , it should show the features provided and membership validity\n                                </p>\n                                <hr>\n                                <p class=\"card-description\">\n                                    Can Remove 5 Reviews.\n                                </p>\n                                <hr>\n                                <p>\n                                    Take precedence when searching.\n                                </p>\n                                <hr>\n                                <a href=\"#pablo\" class=\"btn btn-success btn-round\" *ngIf=\"currentObj.membership == '2'\">Selected</a>\n                                <a href=\"#pablo\" class=\"btn btn-success btn-round\" *ngIf=\"currentObj.membership != '2'\" (click)=\"getTotal(3500)\" data-toggle=\"modal\" data-target=\"#myLoginModal\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"myLoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\" modal-dialog\">\n        <div class=\"row modal-content\" style=\"width:100%\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <div class=\"checkout-container\" style=\"min-height: 50vh!important;padding:10px\">\n                        <form #checkout=\"ngForm\" (ngSubmit)=\"onSubmit(checkout)\" class=\"checkout\">\n                            <div class=\"form-row\">\n                                <label for=\"card-info\">Card Info</label>\n                                <div id=\"card-info\" #cardInfo></div>\n\n                                <div id=\"card-errors\" role=\"alert\" *ngIf=\"error\">{{ error }}</div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"name\">Name</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" placeholder=\"Enter your name\">\n                                <div class=\"valid-feedback\">\n                                    Looks good!\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"name\">Address</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"address\" name=\"address\" id=\"address\" placeholder=\"Enter your address\">\n                                <div class=\"valid-feedback\">\n                                    Looks good!\n                                </div>\n                            </div>\n                            <button type=\"submit\">Pay INR {{priceTotal}}</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/mybusiness/mybusiness.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/mybusiness/mybusiness.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-warning card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">how_to_vote</i>\n                        </div>\n                        <h4 class=\"card-title\">All Payment Table</h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables table-responsive\">\n                            <table id=\"datatables\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Date</th>\n                                        <th>Name</th>\n                                        <th>Amount</th>\n                                        <th>Content</th>\n                                        <th>Status</th>\n                                        <!-- <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[8] }}</th> -->\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Date</th>\n                                        <th>Name</th>\n                                        <th>Amount</th>\n                                        <th>Content</th>\n                                        <th>Status</th>\n\n                                        <!-- <th class=\"text-right\">{{ dataTable.footerRow[8] }}</th> -->\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr  *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td *ngIf=\"row[4] == 0\">CLIENT -> VENDOR</td>\n                                        <td *ngIf=\"row[4] != 0\">MEMBERSHIP</td>\n                                        <!-- <td class=\"text-right\">\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                            <a href=\"javascript:void(0\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/myrequest/myrequest.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/myrequest/myrequest.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"page-categories\" style=\"width: 100%;\">\n                <ul class=\"nav nav-pills nav-pills-success nav-pills-icons justify-content-center\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                            <i class=\"material-icons\">error_outline</i> All Request\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                            <i class=\"material-icons\">history</i> Pending Request\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                            <i class=\"material-icons\">check_circle_outline</i> Accepted Request\n                        </a>\n                    </li>\n                </ul>\n                <div class=\"tab-content tab-space tab-subcategories\">\n                    <div class=\"tab-pane\" id=\"link7\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-success card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">error_outline</i>\n                                    </div>\n                                    <h4 class=\"card-title\">Request All</h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Phone</th>\n                                                    <th>Date </th>\n                                                    <th>City </th>\n                                                    <th>Status</th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name </th>\n                                                    <th>Phone</th>\n                                                    <th>Date </th>\n                                                    <th>City </th>\n                                                    <th>Status</th>\n                                                    <th class=\"text-right\">Actions</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody *ngIf=\"dataTable && dataTable.dataRows\">\n                                                <tr *ngFor=\"let row of dataTable.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td>{{row[4]}}</td>\n                                                    <td class=\"text-right\">\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                                        <a href=\"javascript:void(0\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a >\n                                                                    <img alt=\"xxx\"  *ngIf=\"item.leadStatus == 'allow'\" src=\"assets/img/avatar/green_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                    <img alt=\"xxx\"  *ngIf=\"item.leadStatus != 'allow'\" src=\"assets/img/avatar/red_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} \n                                                                            </a>\n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span *ngIf=\"item.leadStatus == 'allow'\"style=\"padding: 7px;border-radius: 5px;background-color: green; color:white\">Allow</span>\n                                                                            <span *ngIf=\"item.leadStatus != 'allow'\"style=\"padding: 7px;border-radius: 5px;background-color: red; color:white\">Pending</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>(Phone :{{item.phoneNumber}})\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.clientEmail}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <!-- <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p> -->\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.leadStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.leadStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate,item.clientEmail,item.leadStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult\" (changePage)=\"onChangePage($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">error_outline</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane active\" id=\"link8\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-success card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">history</i>\n                                    </div>\n                                    <h4 class=\"card-title\">Request Pendindg </h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables1\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name </th>\n                                                    <th>Phone</th>\n                                                    <th>Date </th>\n                                                    <th>City </th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name </th>\n                                                    <th>Phone</th>\n                                                    <th>Date </th>\n                                                    <th>City </th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody *ngIf=\"dataTable1 && dataTable1.dataRows\">\n                                                <tr *ngFor=\"let row of dataTable1.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td class=\"text-right\">\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                                        <a href=\"javascript:void(0\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult1.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems1;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a >\n                                                                    <img alt=\"xxx\"  src=\"assets/img/avatar/red_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} \n                                                                            </a>\n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span style=\"padding: 7px;border-radius: 5px;background-color: red; color:white\">Pending</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>(Phone :{{item.phoneNumber}})\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.clientEmail}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <!-- <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p> -->\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.leadStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.leadStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate,item.clientEmail,item.leadStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult1\" (changePage)=\"onChangePage1($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult1.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">error_outline</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"tab-pane\" id=\"link9\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card\">\n                                <div class=\"card-header card-header-success card-header-icon\">\n                                    <div class=\"card-icon\">\n                                        <i class=\"material-icons\">check_circle_outline</i>\n                                    </div>\n                                    <h4 class=\"card-title\">Request Accepted </h4>\n                                </div>\n                                <!-- <div class=\"card-body\">\n                                    <div class=\"toolbar\">\n                                    </div>\n                                    <div class=\"material-datatables table-responsive\">\n                                        <table id=\"datatables2\" class=\"table  table-no-bordered table-hover \" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                            <thead>\n                                                <tr>\n                                                    <th>Name </th>\n                                                    <th>Phone</th>\n                                                    <th>Date </th>\n                                                    <th>City </th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </thead>\n                                            <tfoot>\n                                                <tr>\n                                                    <th>Name</th>\n                                                    <th>Phone</th>\n                                                    <th>Date</th>\n                                                    <th>City</th>\n                                                    <th class=\"disabled-sorting text-right\">Actions</th>\n                                                </tr>\n                                            </tfoot>\n                                            <tbody *ngIf=\"dataTable2 && dataTable2.dataRows\">\n                                                <tr *ngFor=\"let row of dataTable2.dataRows\">\n                                                    <td>{{row[0]}}</td>\n                                                    <td>{{row[1]}}</td>\n                                                    <td>{{row[2]}}</td>\n                                                    <td>{{row[3]}}</td>\n                                                    <td class=\"text-right\">\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a>\n                                                        <a href=\"javascript:void(0\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a>\n                                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div> -->\n                                <div class=\"card-body\">\n                                    <div class=\"row\" *ngIf=\"searchResult2.length > 0\">\n                                        <div class=\"col-md-10 col-sm-12 ml-auto mr-auto\" style=\"width: 100%;\">\n                                             <div class=\"row \">\n                                                <div class=\"col-md-4 \" *ngFor=\"let item of pageOfItems2;let i = index;\">\n                                                    <div class=\"PrimaryVendorCard shadow_one radius sc-jTzLTM wFnqD \"  style=\"margin-bottom: 45px; \">\n                                                        <div class=\"__react_component_tooltip place-top type-dark \" data-id=\"tooltip \"></div>\n                                                        <div class=\"vendor-card radius \">\n                                                            <div class=\"vendor-picture margin-r-10 \">\n                                                                <a >\n                                                                    <img alt=\"xxx\"  src=\"assets/img/avatar/green_avatar.jpg\" class=\"object-fit-cover w-100 \" style=\"height: 210px; border-radius: 2px 2px 0px 0px; \">\n                                                                </a>\n                                                                <!-- <img class=\"info-icon pointer \" data-tip=\"true \" data-for=\"12703 \" src=\"https://images.wedmegood.com/images/info-icon-bg.png \" alt=\" \" currentitem=\"false \" style=\"position: absolute; bottom: 10px; right: 10px;cursor:pointer\n                                                                \" (mouseover)=\"infoHover[i]=true \" (mouseout)=\"infoHover[i]=false \"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"favouriteArr.includes(item._id)\" src=\"assets/img/heart1.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\"> -->\n                                                                <!-- <img class=\"info-icon pointer \" *ngIf=\"!favouriteArr.includes(item._id)\" src=\"assets/img/heart.png\" alt=\" \" (click)=\"showNotification(item, 'top','right', 2, 'This vendor has just inserted in Your Favourite Carts.')\" style=\"position: absolute; bottom: 10px; right: 40px;cursor:pointer\">-->\n                                                            </div> \n                                                            <!-- <ng-template #tipContent>\n                                                                <div>\n                                                                    <p class=\"text-bold \">About vendor</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.introduction}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Venue Type</p>\n                                                                    <p style=\"margin-top: 5px; \">{{item.vendorId.type}}</p>\n                                                                </div>\n                                                                <div class=\"margin-t-10 \">\n                                                                    <p class=\"text-bold \">Phone</p>\n                                                                    <p style=\"margin-top: 5px; \">91+ {{item.vendorId.phone}}</p>\n                                                                </div>\n                                                            </ng-template> -->\n                                                            <div class=\"vendor-info \">\n                                                                <div class=\"padding-10 \" style=\"padding-bottom: 6px;\">\n                                                                    <div class=\"line f-space-between \">\n                                                                        <div class=\"frow \">\n                                                                            <a class=\"vendor-detail text-bold h6 \" style=\"max-width: 200px;color:black!important;margin-bottom:0px;font-size:15px!important;font-weight: bold; \">\n                                                                                    {{item.fullName}} \n                                                                            </a>\n                                                                            <!-- <img ngbTooltip=\"This vendor's {{item.vendorId.verifyStatus.emailVerify ? ' Email. ' : ''}} {{item.vendorId.verifyStatus.phoneVerify ? ' Phone. ' : ''}} has been verified.\" data-effect=\"solid\" *ngIf=\"item.vendorId.verifyStatus && (item.vendorId.verifyStatus.emailVerify ||item.vendorId.verifyStatus.phoneVerify)\"\n                                                                                src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6IzM0OThkYn0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iR3JvdXBfNDcyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ3MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ2MSAtNDY1KSI+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjE1IiBkPSJNMTQuNyA5Ljc5NUwxNC45MjggMTJsLTIuMDI3LjlMMTIgMTQuOTI4IDkuNzk1IDE0LjcgOCAxNmwtMS43OTUtMS4zTDQgMTQuOTI4IDMuMSAxMi45IDEuMDcyIDEyIDEuMyA5Ljc5NSAwIDhsMS4zLTEuNzk1TDEuMDcyIDQgMy4xIDMuMSA0IDEuMDcybDIuMjA1LjIyOEw4IDBsMS43OTUgMS4zTDEyIDEuMDcybC45IDIuMDI4IDIuMDI0LjktLjIyNCAyLjIwNUwxNiA4em0wIDAiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDIxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYxIDQ2NSkiLz4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yMTYiIGQ9Ik0xMzEuNjIyIDE1NS43MTZsLS43NTUtLjc1NS00LjUyNSA0LjUyNS0xLjUwOS0xLjUwNy0uNzU1Ljc1MiAyLjI2NCAyLjI2OXptMCAwIiBjbGFzcz0iY2xzLTIiIGRhdGEtbmFtZT0iUGF0aCAyMTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0MS4wNTggMzE1LjIwNCkiLz4KICAgIDwvZz4KPC9zdmc+Cg==\"\n                                                                                alt=\"verified_icon\" tooltipClass=\"my-custom-class\" class=\"pointer\" currentitem=\"false\"/> -->\n                                                                        </div>\n                                                                        <div>\n                                                                            <span style=\"padding: 7px;border-radius: 5px;background-color: green; color:white\">Allow</span>\n                                                                        </div>\n                                                                    </div>\n                                                                    <div class=\"line \">\n                                                                        <!-- <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{item.vendorId.area}}</span>&nbsp; {{searchObj.businessCityName}}</p> -->\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"><i class=\"fa h6 fa-map-marker margin-r-5 \"></i>&nbsp; <span>{{cities[item.eventCity].name}}</span>&nbsp;</p>(Phone :{{item.phoneNumber}})\n                                                                    </div>\n                                                                </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"strike\" style=\"color:gray;    line-height: 20px;\n                                                                        font-size: 15px;\">{{item.clientEmail}}</span>\n                                                                        <p class=\"vendor-detail \" style=\"margin:0;font-size:14px!important; \"> <span>{{item.eventDate}}</span>&nbsp;</p>\n                                                                    </div>\n                                                                <div class=\"line \">\n                                                                    <hr>\n                                                                </div>\n                                                                <div class=\"vendor-price frow margin-10 f-space-between \" style=\"margin-bottom:0px\">\n                                                                    <span class=\"frow v-center \">\n                                                                            <!-- <p class=\"vendor-detail text-bold text-primary v-center margin-r-5 \">\n                                                                                <i class=\" fas fa-rupee-sign margin-r-5\"></i><span class=\"strike \">{{item.maxBudget}}</span>\n                                                                    </p> -->\n                                                                    <!-- <p class=\"text-primary \">onwards</p> -->\n                                                                    </span>\n                                                                    <!-- <a href=\"#\" style=\"color:darkgray\">Price per plate</a> -->\n                                                                </div>\n                                                                <div style=\"height: 48px;text-align: center;margin-bottom:5px\" >\n                                                                    <!-- <button class=\"btn btn-success\" (click)=\"changeEnquiry(item._id,item.maxBudget, item.eventCity, item.additionalContent, item.eventDate)\"style=\"width: 40%;margin:0%;margin-left:8%;margin-right:4%\" data-toggle=\"modal\" data-target=\"#changeModal\">\n                                                                        Change Enquiry \n                                                                    </button>\n                                                                    <div class=\"modal fade\" id=\"changeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"changeLabel\" aria-hidden=\"true\">\n                                                                        <div class=\" modal-dialog\">\n                                                                            <form *ngIf='quotationUpdateForm' [formGroup]=\"quotationUpdateForm\" (ngSubmit)=\"quotationButton(0)\">\n                                                                                <div class=\"modal-content card card-login card-hidden\" style=\"margin-top:0!important\">\n                                                                                    <div class=\"card-header card-header-text card-header-success\">\n                                                                                        <div class=\"card-text\">\n                                                                                            <h4 class=\"card-title\">Change Enquiry</h4>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-body\">\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">room</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <mat-select placeholder=\"Select City\" name=\"city\" [formControl]=\"get_event_city\">\n                                                                                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                                                                                                            {{ city.name }}\n                                                                                                        </mat-option>\n                                                                                                    </mat-select>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">insert_invitation</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field>\n                                                                                                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\" (click)=\"picker2.open()\" name=\"get_event_date\" [formControl]=\"get_event_date\">\n                                                                                                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                                                                    <mat-datepicker #picker2 startView=\"year\"></mat-datepicker>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">attach_money</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"number\" min=\"1000\" step=\"100\" value=\"1000\" matInput placeholder=\"Max Budget*\" [formControl]=\"get_max_budget\">\n                                                                                                    <mat-error *ngIf=\"get_max_budget.hasError('required')\">\n                                                                                                        Budget is <strong>required</strong>\n                                                                                                    </mat-error>\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                        <div class=\"row\">\n                                                                                            <div class=\"col-sm-2 col-form-label\">\n                                                                                                <i class=\"material-icons\">note</i>\n                                                                                            </div>\n                                                                                            <div class=\"col-sm-10\">\n                                                                                                <mat-form-field class=\"input-group\">\n                                                                                                    <input type=\"text\" matInput placeholder=\"Additional Content...*\" [formControl]=\"get_additional_content\" >\n                                                                                                </mat-form-field>\n                                                                                            </div>\n                                                                                        </div>\n                                                                                    </div>\n                                                                                    <div class=\"card-footer justify-content-center\">\n                                                                                        <button mat-raised-button type=\"submit\"  color=\"success\" class=\"btn btn-success\">\n                                                                                Change\n                                                                            </button>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </form>\n                                                                        </div>\n                                                                    </div> -->\n                                                                    <button class=\"btn btn-success\" [disabled]=\"item.leadStatus == 'allow'\" (click)=\"acceptFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Acccept\n                                                                    </button>\n                                                                    <button class=\"btn btn-danger\" [disabled]=\"item.leadStatus != 'allow'\"  (click)=\"pendingFunc(item._id,item.eventDate,item.clientEmail)\">\n                                                                        Pending\n                                                                    </button>\n                                                                    <button class=\"btn btn-primary\"   (click)=\"cancelFunc(item.eventDate,item.clientEmail,item.leadStatus)\">\n                                                                        Cancel\n                                                                    </button>\n                                                                </div>\n                                                            </div>\n                                                         </div>\n                                                     </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-4\"></div>\n                                                <div class=\"col-md-8 mr-auto\">\n                                                    <jw-pagination [items]=\"searchResult2\" (changePage)=\"onChangePage2($event)\" pageSize=\"6\"></jw-pagination>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\" *ngIf=\"searchResult2.length == 0\">\n                                        <div class=\"text-center\" style=\"padding-top:80px;width:100%;padding-bottom:80px\">\n                                            <!-- <i class=\"fas fa-heart\" style=\"font-size:3em\"></i> -->\n                                            <i class=\"material-icons\" style=\"font-size:3em\">error_outline</i>\n                                            <p style=\"padding-top:20px\">Uh Oh! Requests are currently unavailable</p>\n                                        </div>\n                                    </div>\n                                </div> \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/myreview/myreview.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/myreview/myreview.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-primary card-header-icon\">\n                        <div class=\"card-icon\">\n                            <i class=\"material-icons\">assignment</i>\n                        </div>\n                        <h4 class=\"card-title\">Review Table <span *ngIf=\"obj['reviewNum'] > 0 && obj['membership'] >  0\"> &nbsp;&nbsp;(You can remove {{obj['reviewNum']}} reviews because of Membership}</span></h4>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"toolbar\">\n                            <!--        Here you can write extra buttons/actions for the toolbar              -->\n                        </div>\n                        <div class=\"material-datatables\">\n                            <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                                <thead>\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                        <th>Date</th>\n                                        <th>Subject</th>\n                                        <th style=\"width:43%\">Write</th>\n                                        <th>OverallRating</th>\n                                        <th *ngIf=\"obj['reviewNum'] > 0 && obj['membership'] >  0\" class=\"disabled-sorting text-right\">Actions</th>\n                                    </tr>\n                                </thead>\n                                <tfoot>\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Email</th>\n                                        <th>Date</th>\n                                        <th>Subject</th>\n                                        <th style=\"width:43%\">Write</th>\n                                        <th>OverallRating</th>\n                                        <th *ngIf=\"obj['reviewNum'] > 0 && obj['membership'] >  0\" class=\"text-right\">Actions</th>\n                                    </tr>\n                                </tfoot>\n                                <tbody>\n                                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                                        <td>{{row[0]}}</td>\n                                        <td>{{row[1]}}</td>\n                                        <td>{{row[2]}}</td>\n                                        <td>{{row[3]}}</td>\n                                        <td style=\"width:43%\">{{row[4]}}</td>\n                                        <td>{{row[5]}}</td>\n                                        <td class=\"text-right\" *ngIf=\"obj['reviewNum'] > 0 && obj['membership'] >  0\" (click)=\"delFunc(row[1],row[2])\">\n                                            <!-- <a href=\"javascript:void(0)\" class=\"btn btn-link btn-info btn-just-icon like\"><i class=\"material-icons\">favorite</i></a> -->\n                                            <!-- <a href=\"javascript:void(0\" class=\"btn btn-link btn-warning btn-just-icon edit\"><i class=\"material-icons\">dvr</i></a> -->\n                                            <a href=\"javascript:void(0s\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                    <!-- end content-->\n                </div>\n                <!--  end card  -->\n            </div>\n            <!-- end col-md-12 -->\n        </div>\n        <!-- end row -->\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/pastwork/pastwork.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/pastwork/pastwork.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"background-color: white;\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <!-- <h2 class=\"section-title\">My Past Work</h2> -->\n            <div class=\"col-md-12\">\n                <p style=\"margin-top: 40px;font-size: 1.125em;line-height: 1.5em;font-weight: 500;\">\n                    Minimum 5 photos\n                </p>\n                <p style=\"margin-bottom: 40px;padding-top: 8px;    font-size: 1em;line-height: 1.5em;color:gray;\">\n                    Add photos of {{curObj['type']}} in different albums\n                </p>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"row\" *ngIf=\"urls\">\n                    <div class=\"col-md-2\" *ngFor=\"let url of urls\" style=\"border-radius: 3%;background-color: #f2ecea;padding:8px 8px; margin:3px 3px\">\n                        <img [src]=\"url\" width=\"100%\" height=\"auto%\" alt=\"xxx\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"snippet-container\">\n                    <div class=\"file-upload active\">\n                        <button class=\"fu-btn open-album-pop\" (click)=\"addNewAlbum()\"><span class=\"upload-plus\">+</span>Add New Album</button>\n                    </div>\n                    <!-- <div class=\"pw-snippet\">\n            <img src=\"assets/web_backend/bg-pricing.jpg\" alt=\"\">\n          </div> -->\n                    <div class=\"pw-snippet\" *ngFor=\"let album of curObj.pastworkPhotos\">\n                        <a [routerLink]=\"album\" *ngIf=\"groupArr && groupArr[album] && groupArr[album].length != 0\" data-turbolinks=\"false\">\n                            <img [src]=\"groupArr[album][0].src\" alt=\"\">\n                            <p class=\"pw-title\">{{groupArr[album][0].albumName}}</p>\n                            <p class=\"pw-counts\">{{groupArr[album].length}}</p>\n                        </a>\n                       <!--  <a [routerLink]=\"album.album\" *ngIf=\"album.count != 0\" data-turbolinks=\"false\">\n                            <img [src]=\"'./uploads/' + album.photo\" alt=\"\">\n                            <p class=\"pw-title\">{{album.album}}</p>\n                            <p class=\"pw-counts\">{{album.count}} photos</p>\n                        </a>-->\n                        <a [routerLink]=\"album\" *ngIf=\"!groupArr || !groupArr[album] || groupArr[album].length == 0\" data-turbolinks=\"false\">\n                            <div class=\"no_image\"></div>\n                            <p class=\"pw-title\">{{album}}</p>\n                        </a> \n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\" *ngIf=\"curObj.pastworkPhotos && curObj.pastworkPhotos.length > 0 \">\n                <p style=\"margin-top: 40px;font-size: 1.125em;line-height: 1.5em;font-weight: 500;\">\n                    Uploaded Images (Images Link)\n                </p>\n            </div>\n            <div class=\"col-md-12\"  *ngIf=\"curObj.pastworkPhotos && curObj.pastworkPhotos.length > 0 \">\n                <div class=\"snippet-container\">\n                    <div class=\"pw-snippet\" *ngFor=\"let subPhoto of curObj['pastworkPhotos']\">\n                        <a  data-turbolinks=\"false\">\n                            <img [src]=\"subPhoto\" alt=\"\">\n                        </a>\n                    </div>\n                </div>\n            </div> -->\n            <!-- <div class=\"col-md-12\">\n        <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\n          <div class=\"fileinput-new thumbnail\">\n              <img src=\"./assets/img/image_placeholder.jpg\" alt=\"...\">\n          </div>\n          <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\n          <div>\n              <span class=\"btn btn-rose btn-round btn-file\">\n                  <span class=\"fileinput-new\">Select image</span>\n                  <span class=\"fileinput-exists\">Change</span>\n                  <input type=\"file\" name=\"...\" />\n              </span>\n              <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"><i class=\"fa fa-times\"></i> Remove</a>\n          </div>\n      </div>\n      </div> -->\n            <div class=\"col-md-12\">\n                <p style=\"margin-top: 40px;font-size: 1.125em;line-height: 1.5em;font-weight: 500;\">\n                    <!-- Minimum 2 albums (15 photos each) -->\n                    Add Video\n                </p>\n                <!-- <p style=\"margin-bottom: 40px;padding-top: 8px;    font-size: 1em;line-height: 1.5em;color:gray\">\n                    Add video of {{curObj['type']}} \n                </p> -->\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"snippet-container\">\n                    <div class=\"file-upload active\">\n                        <button class=\"fu-btn open-album-pop\" (click)=\"addNewVideo()\"><span class=\"upload-plus\">+</span>Add New Video</button>\n                    </div>\n                    <!-- <div class=\"pw-snippet\"> -->\n                    <!-- <iframe id=\"videoObject\" type=\"text/html\" src=\"https://www.youtube.com/embed/e1LaekAnVIM?autoplay=1&amp;enablejsapi=1\" width=\"160px\" height=\"160px\" frameborder=\"0\" allowfullscreen></iframe> -->\n                    <!-- <iframe id=\"videoObject\" type=\"text/html\" [src]=\"NowVideObj\" width=\"160px\" height=\"160px\" frameborder=\"0\" allowfullscreen></iframe> -->\n                    <!-- </div> -->\n                    <div class=\"pw-snippet vendor-video-list\" *ngFor=\"let vimeo of vimeo_iframe_html\">\n                        <div [innerHtml]=\"vimeo\" style=\"width: 100%;height: 160px;\"></div>\n                    </div>\n                    <!-- <div class=\"pw-snippet vendor-video-list\" *ngFor=\"let subVideo of allVideoInfo\">\n                        {{subVideo}}\n                        <iframe type=\"text/html\" src=\"{{subVideo}}\" width=\"160px\" height=\"160px\" frameborder=\"0\" allowfullscreen></iframe>\n                    </div> -->\n                    <!-- <div class=\"pw-snippet vendor-video-list\" data-video-url=\"https://www.youtube.com/embed/cBfcbb07Tqk\" data-video-title=\"MEAN Stack Front To Back [Part 10] - App Deployment to Heroku\" data-video-id=\"21919\">\n                        <div class=\"pw-video-thumb-c\">\n                            <img src=\"https://i.ytimg.com/vi/cBfcbb07Tqk/hqdefault.jpg\" alt=\"\">\n                            <span class=\"pw-snippet-video-overlay\">\n                                            <i class=\"material-icons\">play_circle_outline</i>\n                                        </span>\n                        </div>\n                        <p class=\"pw-title\">MEAN Stack Front ...</p>\n                    </div> -->\n                </div>\n\n            </div>\n\n            <!-- <div>\n\t<img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n</div> -->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/pastwork/previewupload/previewupload.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/pastwork/previewupload/previewupload.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" style=\"background-color: white;\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <a routerLink=\"/admin/pastWork\">\n                <h2 class=\"section-title\"><i class=\"material-icons\">keyboard_arrow_left</i>{{route.snapshot.params.id}}</h2>\n            </a>\n            <div class=\"col-md-12\">\n                <p style=\"margin-top: 40px;font-size: 1.125em;line-height: 1.5em;font-weight: 500;\">\n                    Minimum 5 photos\n                </p>\n                <p style=\"margin-bottom: 40px;padding-top: 8px;    font-size: 1em;line-height: 1.5em;color:gray;\">\n                    Add photos of {{curObj['type']}} in different albums\n                </p>\n            </div>\n            <div class=\"col-md-12\">\n                <!-- <h1 *ngIf=\"fileUploadProgress\">\n          Upload progress: {{ fileUploadProgress }}\n        </h1> -->\n                <div class=\"progress progress-line-danger\">\n                    <div class=\"progress-bar progress-bar-success\" [ngStyle]={width:fileUploadProgress}>\n                        <span class=\"sr-only\">35% Complete (success)</span>\n                    </div>\n                </div>\n            </div>\n            <!-- <div class=\"col-md-12\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\" *ngFor=\"let url of urls\" style=\"border-radius: 3%;background-color: #f2ecea;padding:8px 8px; margin:3px 3px\">\n                        <img [src]=\"url\" width=\"100%\" height=\"auto%\" alt=\"xxx\" />\n                    </div>\n                </div>\n            </div> -->\n            <!-- <div class=\"col-md-12\">\n        <div class=\"row\">\n          <img style=\"width:100%\"src=\"../../../../../../1222/web_backend/public/dailypay-app-payroll-faster-payments.jpg\" alt=\"\">\n\n          <div class=\"col-md-3\"style=\"width:100%\" *ngFor=\"let photo of photos\">\n            <img style=\"width:100%\"src=\"../../../../../../1222/web_backend/{{photo.path}}\" alt=\"\">\n          </div>\n        </div>\n      </div> -->\n            <div class=\"col-md-12\">\n                <div class=\"snippet-container\">\n\n                    <div class=\"file-upload\">\n                        <!-- <div class=\"fileinput-new thumbnail\">\n              <img src=\"../../../assets/img/image_placeholder.jpg\" alt=\"...\">\n          </div>\n            <div class=\"fileinput-preview fileinput-exists thumbnail\">\n            </div> -->\n\n                        <button class=\"fu-btn btn-file\">\n                <span class=\"upload-plus\">+</span>Add Photos\n                <input type=\"file\" multiple name=\"image\" (change)=\"selectImg($event)\" />\n            </button>\n                    </div>\n                    <div class=\"pw-snippet\" *ngFor=\"let photo of imgSrc;let i = index;\">\n                        <a (click)='selImgNew(photo)'>\n                            <!-- <img [src]=\"'./assets/web_backend/' + photo.path\" [alt]=\"i\"> -->\n                            <img [src]=\"photo\" [alt]=\"i\">\n                            <!-- <img [src]=\"'../assets/' + photo.path\" [alt]=\"i\"> -->\n                            <!-- <img src=\"../../../../assets/5e21d214cf90541dc832baeb/11/alyshavarun_morocco_3.jpg\"> -->\n                        </a>\n                    </div>\n                    <div class=\"pw-snippet\" *ngFor=\"let photoNow of allPhoto;let j = index;\">\n                        <a  (click)='selImg(photoNow)'>\n                            <img [src]=\"photoNow.src\" [alt]=\"j\">\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/policiesplan/policiesplan.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/policiesplan/policiesplan.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/profilepicture/profilepicture.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/profilepicture/profilepicture.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profilepicture works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/servicepricing/servicepricing.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/servicepricing/servicepricing.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <!-- <img class=\"img_bg\" src=\"../../../assets/img/bg/4.jpg\" style=\"height: 400px;\" alt=\"\">\n  <div class=\"img_black\"style=\"height: 400px;\"></div> -->\n    <!-- <div class=\"page-header1 wedding\"style=\"height: 400px;\"> -->\n    <!-- <h1>WeddingDetails</h1> -->\n    <!-- </div> -->\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form *ngIf=\"serviceForm\" [formGroup]=\"serviceForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <p style=\"font-size:25px;font-weight: bold;padding:5px\">\n                                    You can input <span style=\"color:fa4a6f\">Service & Pricing</span>\n                                </p>\n                            </div>\n                        </div>\n                        <!-- travel other indian cities -->\n                        <div class=\"row\" *ngIf=\"currentVendor.type != 'Venue' && currentVendor.type != 'BridalDesigner' && currentVendor.type != 'BandBajaGhodiwala' && currentVendor.type != 'Caterer' && currentVendor.type !='WeddingDecorator' && currentVendor.type !='WeddingInvitation'  && currentVendor.type != 'Choreographer'  && currentVendor.type != 'TravelHoneymoon'\">\n                            <div class=\"col-md-6\">\n                                <legend>Travel to other cities</legend>\n                                <div class=\"togglebutton\">\n                                    <label>No\n                                    <input type=\"checkbox\" [formControl]=\"travelOtherIndianCities\">\n                                    <span class=\"toggle\"></span>\n                                    <!-- Toggle is on -->\n                                        Yes\n                                </label>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\" *ngIf=\"travelOtherIndianCities.value\">\n                                <!-- <legend>Travel Cost(RS)</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"Travel Cost... *\" [formControl]=\"travelCostControl\">\n                                </mat-form-field> -->\n                                <div class=\"togglebutton\">\n                                    <label>Not to be paid by client\n                                        <input type=\"checkbox\" [formControl]=\"travelCostControl\">\n                                        <span class=\"toggle\"></span>\n                                        To be paid by client\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'BridalDesigner'\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>You rent for </legend>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                            <input type=\"checkbox\" [formControl]=\"brideWearCheckControl\">\n                                            <span class=\"toggle\"></span>Bride wear\n                                            <!-- Toggle is on -->\n                                        </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                            <input type=\"checkbox\" [formControl]=\"groomWearCheckControl\">\n                                            <span class=\"toggle\"></span>Groom wear\n                                            <!-- Toggle is on -->\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\" *ngIf=\"brideWearCheckControl.value\">\n                                    <mat-form-field>\n                                        <mat-label>What type of outfits do you offer for Bride wear</mat-label>\n                                        <mat-select multiple [formControl]=\"brideWearSelectControl\">\n                                            <mat-option value=\"bridalLehengas\">Bridal Lehengas</mat-option>\n                                            <mat-option value=\"lightLehengas\">Light Lehengas</mat-option>\n                                            <mat-option value=\"gowns\">Gowns</mat-option>\n                                            <mat-option value=\"trousseauSarees\">Trousseau Sarees</mat-option>\n                                            <mat-option value=\"trousseauAnarkalis\">Trousseau Anarkalis</mat-option>\n                                            <mat-option value=\"indoWestern\">Indo-Western</mat-option>\n                                            <mat-option value=\"christianWeddingGowns\">Christian wedding gowns</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\" *ngIf=\"groomWearCheckControl.value\">\n                                    <mat-form-field>\n                                        <mat-label>What type of outfits do you offer for Groom wear</mat-label>\n                                        <mat-select  multiple [formControl]=\"groomWearSelectControl\">\n                                            <mat-option value=\"sherwani\">Sherwani</mat-option>\n                                            <mat-option value=\"weddingSuitsTuxes\">Wedding Suits/Tuxes</mat-option>\n                                            <mat-option value=\"kurtaPyjama\">Kurta Pyjama</mat-option>\n                                            <mat-option value=\"bandhgala\">Bandhgala</mat-option>\n                                            <mat-option value=\"waistCoatsNehruJackets\">Waist Coats/Nehru Jackets</mat-option>\n                                            <mat-option value=\"indoWestern\">Indo-Western</mat-option>\n                                            <mat-option value=\"pagadi\">Pagadi</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                           \n                            <div class=\"row\" *ngIf=\"(brideWearSelectControl.value.length > 0 || groomWearSelectControl.value.length > 0)\">\n                                <!-- <legend>{{subService}}</legend> -->\n                                <div class=\"col-md-6\"*ngIf=\"brideWearCheckControl.value && brideWearSelectControl.value.length > 0\">\n                                    <legend *ngIf=\"brideWearSelectControl.value.length > 0\">Bride Wear Pricing</legend>\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\" *ngFor=\"let subService of brideWearSelectControl.value\">\n                                            <mat-form-field class=\"input-group\" >\n                                                ₹&nbsp; <input type=\"number\" step=\"100\" min=\"0\" matInput [placeholder]=\"subService + ' Starting Price'\"  [(ngModel)]=\"brideWearStartingPrice[subService]\"[ngModelOptions]=\"{standalone: true}\">\n                                            </mat-form-field>\n                                         </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\" *ngIf=\"groomWearCheckControl.value && groomWearSelectControl.value.length > 0\">\n                                    <legend *ngIf=\"groomWearSelectControl.value.length > 0\">Groom Wear Pricing</legend>\n                                    <div class=\"row\">\n                                        <!-- <legend>{{subService}}</legend> -->\n                                        <div class=\"col-md-6\" *ngFor=\"let subService1 of groomWearSelectControl.value\">\n                                            <mat-form-field class=\"input-group\" >\n                                                ₹&nbsp; <input type=\"number\" step=\"100\" min=\"0\" matInput  [placeholder]=\"subService1 + ' Starting Price'\" [(ngModel)]=\"groomWearStartingPrice[subService1]\"[ngModelOptions]=\"{standalone: true}\">\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\" *ngIf=\"groomWearCheckControl.value.length >0\">\n                                <div class=\"col-md-4\" *ngFor=\"let subService of groomWearCheckControl.value\">\n                                    <mat-form-field class=\"input-group\" >\n                                        ₹&nbsp; <input type=\"number\" step=\"100\" min=\"0\" matInput  [placeholder]=\"subService + ' Starting Price'\" [(ngModel)]=\"groomWearStartingPrice[subService]\"[ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Most of your outfits are:</legend>\n                                    <!-- <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Choose type of store... *\" [formControl]=\"chooseTypeOfStore\">\n                                    </mat-form-field> -->\n                                    <mat-form-field>\n                                        <!-- <mat-label>Store</mat-label> -->\n                                        <mat-select [formControl]=\"yourOutfits\">\n                                            <mat-option value=\"Custom designed outfits from scratch\">Custom designed outfits from scratch</mat-option>\n                                            <mat-option value=\"Ready to purchase outfits\">Ready to purchase outfits</mat-option>\n                                            <mat-option value=\"Sample pieces on which order can be placed\">Sample pieces on which order can be placed</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <legend>Which year did your Store/Studio start  </legend>\n                                <mat-form-field>\n                                    <!-- <mat-label>Which year did your Store/Studio start </mat-label> -->\n                                    <mat-select [formControl]=\"storeStudioStart\" (selectionChange)=\"changeChooseCore($event, 1)\">\n                                        <mat-option value=\"1990\">1990</mat-option>\n                                        <mat-option value=\"1991\">1991</mat-option>\n                                        <mat-option value=\"1992\">1992</mat-option>\n                                        <mat-option value=\"1993\">1993</mat-option>\n                                        <mat-option value=\"1994\">1994</mat-option>\n                                        <mat-option value=\"1995\">1995</mat-option>\n                                        <mat-option value=\"1996\">1996</mat-option>\n                                        <mat-option value=\"1997\">1997</mat-option>\n                                        <mat-option value=\"1998\">1998</mat-option>\n                                        <mat-option value=\"1999\">1999</mat-option>\n                                        <mat-option value=\"2000\">2000</mat-option>\n                                        <mat-option value=\"2001\">2001</mat-option>\n                                        <mat-option value=\"2002\">2002</mat-option>\n                                        <mat-option value=\"2003\">2003</mat-option>\n                                        <mat-option value=\"2004\">2004</mat-option>\n                                        <mat-option value=\"2005\">2005</mat-option>\n                                        <mat-option value=\"2006\">2006</mat-option>\n                                        <mat-option value=\"2007\">2007</mat-option>\n                                        <mat-option value=\"2008\">2008</mat-option>\n                                        <mat-option value=\"2009\">2009</mat-option>\n                                        <mat-option value=\"2010\">2010</mat-option>\n                                        <mat-option value=\"2011\">2011</mat-option>\n                                        <mat-option value=\"2012\">2012</mat-option>\n                                        <mat-option value=\"2013\">2013</mat-option>\n                                        <mat-option value=\"2014\">2014</mat-option>\n                                        <mat-option value=\"2015\">2015</mat-option>\n                                        <mat-option value=\"2016\">2016</mat-option>\n                                        <mat-option value=\"2017\">2017</mat-option>\n                                        <mat-option value=\"2018\">2018</mat-option>\n                                        <mat-option value=\"2019\">2019</mat-option>\n                                        <mat-option value=\"2020\">2020</mat-option>\n                                        <mat-option value=\"Other\">Other</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"checkOtherYearFlag\">\n                            <div class=\"col-sm-6\">\n                                <legend>Other Specified Year</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"Other Specified Year\" [formControl]=\"otherSpecifiedYear\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>How would you descrie your establishment ?  </legend>\n                                <mat-form-field>\n                                    <!-- <mat-label>How would you descrie your establishment ?  </mat-label> -->\n                                    <mat-select [formControl]=\"descrieEstablishment\">\n                                        <mat-option value=\"Retail Shop\">Retail Shop</mat-option>\n                                        <mat-option value=\"Studio/Boutique\">Studio/Boutique</mat-option>\n                                        <mat-option value=\"Multi-Designer Studio\">Multi-Designer Studio</mat-option>\n                                        <mat-option value=\"Rental Store\">Rental Store</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Outfits Pick Up & Drop Policy</legend>\n                                <mat-form-field>\n                                    <!-- <mat-label>Outfits Pick Up & Drop Policy</mat-label> -->\n                                    <mat-select [formControl]=\"outfitsPickupDropPolicy\">\n                                        <mat-option value=\"Client Pickup and Drop\">Client Pickup and Drop</mat-option>\n                                        <mat-option value=\"Store Pickup and Drop\">Store Pickup and Drop</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Store</legend>\n                                    <mat-form-field>\n                                        <mat-label>Store</mat-label>\n                                        <mat-select [formControl]=\"chooseTypeOfStore\">\n                                            <mat-option value=\"Couture Brand\">Couture Brand</mat-option>\n                                            <mat-option value=\"Studio/Boutique\">Studio/Boutique</mat-option>\n                                            <mat-option value=\"Multi-Designer Studio\">Multi-Designer Studio</mat-option>\n                                            <mat-option value=\"Retail Shop\">Retail Shop</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Speciality</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Ready to purchase outfits... *\" [formControl]=\"readyToPurchaseOutfits\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Sample pieces on orders\" [formControl]=\"samplePiecesOnOrders\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-3\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Designed outfits from stratch\" [formControl]=\"designedOutfitsFromScratch\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Outfits Offer</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"bridalLehengas...\" [formControl]=\"bridalLehengas\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"lightLehengas...\" [formControl]=\"lightLehengas\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Growns...\" [formControl]=\"growns\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"anarkalisSuits...\" [formControl]=\"anarkalisSuits\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Sareers...\" [formControl]=\"sareers\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"indoWestern...\" [formControl]=\"indoWestern\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'BandBajaGhodiwala'\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Starting price for standard package  </legend>\n                                    <mat-form-field class=\"input-group\" >\n                                        ₹&nbsp; <input type=\"number\" step=\"100\" min=\"11400\" matInput placeholder=\"Starting price for standard package\"  [formControl]=\"startingPackagePrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <legend>What this package include? </legend>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"input-group\" >\n                                        &nbsp; <input type=\"number\" step=\"1\" min=\"0\" matInput placeholder=\"No of Hours\"  [formControl]=\"noHours\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                     <legend>Brass Band</legend>\n                                    <div class=\"togglebutton\">\n                                        <label>No\n                                            <input type=\"checkbox\" [formControl]=\"brassBand\">\n                                            <span class=\"toggle\"></span>\n                                            Yes\n                                            <!-- Toggle is on -->\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <legend>Transportation charges included</legend>\n                                   <div class=\"togglebutton\">\n                                       <label>No\n                                           <input type=\"checkbox\" [formControl]=\"transportationChargesIncluded\">\n                                           <span class=\"toggle\"></span>\n                                           Yes\n                                           <!-- Toggle is on -->\n                                       </label>\n                                   </div>\n                               </div>\n                               <div class=\"col-md-6\">\n                                <mat-form-field class=\"input-group\" >\n                                    &nbsp; <input type=\"number\" step=\"1\" min=\"0\" matInput placeholder=\"Package Info\"  [formControl]=\"packageInfo\">\n                                </mat-form-field>\n                           </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>How much experience you have </legend>\n                                    <mat-form-field>\n                                        <!-- <mat-label>Store</mat-label> -->\n                                        <mat-select [formControl]=\"experiencedHave\">\n                                            <mat-option value=\"< 1 year\">< 1 year</mat-option>\n                                            <mat-option value=\"1-3 year\">1-3 year</mat-option>\n                                            <mat-option value=\"3-5 year\">3-5 year</mat-option>\n                                            <mat-option value=\"5 year +\">5 year +</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                          </div>\n                          <div class=\"row\">\n                            <legend>Your base location where business located </legend>\n                            <div class=\"col-sm-6\">\n                                <mat-form-field class=\"input-group\" >\n                                    &nbsp; <input type=\"text\"  matInput placeholder=\"Your base location where business located \"  [formControl]=\"baseLocationWhereBusinessLocated\">\n                                </mat-form-field>\n                            </div>\n                          </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <legend>Wiling to travel </legend>\n                                <div class=\"togglebutton\">\n                                    <label>No\n                                        <input type=\"checkbox\" [formControl]=\"wilingToTravel\">\n                                        <span class=\"toggle\"></span>\n                                        Yes\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"wilingToTravel.value\">\n                            <div class=\"col-sm-6\">\n                                <legend>Ready to  travel how much km from your base location</legend>\n                                <mat-form-field class=\"input-group\" >\n                                    &nbsp; <input type=\"number\" step=\"1\" min=\"0\" matInput placeholder=\"Ready to  travel how much km from your base location\"  [formControl]=\"readyToTravelKM\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"togglebutton\">\n                                    <label>Not to be paid by client\n                                        <input type=\"checkbox\" [formControl]=\"travelCostControl\">\n                                        <span class=\"toggle\"></span>\n                                        To be paid by client\n                                    </label>\n                                </div>\n                         </div>\n                        </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'BridalMakeupArtist'\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Do you have a studio?</legend>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                            <input type=\"checkbox\" [formControl]=\"haveStudio\">\n                                            <span class=\"toggle\"></span>\n                                            <!-- Toggle is on -->\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <legend>Service Offered</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder=\"Service Offered\" name=\"servicePhoto\" [formControl]=\"makeService\">\n                                            <mat-option value=\"regularMakeup\">RegularMakeup</mat-option>\n                                            <mat-option value=\"airbrushMakeup\">AirbrushMakeup</mat-option>\n                                            <mat-option value=\"guestMakeup\">GuestMakeup</mat-option>\n                                            <mat-option value=\"hairstyling\">Hairstyling</mat-option>\n                                            <mat-option value=\"nailPaint\">NailPaint</mat-option>\n                                            <mat-option value=\"draping\">Draping</mat-option>\n                                            <mat-option value=\"mehendi\">Mehendi</mat-option>\n                                            <mat-option value=\"jewellery\">Jewellery</mat-option>\n                                        </mat-select>\n                                    </mat-form-field> \n                                </div>\n                            </div>\n                            <legend *ngIf=\"makeService.value.length\">My service & pricing</legend>\n                            <div class=\"row\" *ngIf=\"makeService.value.length\">\n                                <div class=\"col-md-4\" *ngFor=\"let subService of makeService.value\">\n                                    <mat-form-field class=\"input-group\" >\n                                        ₹&nbsp;<input type=\"number\" step=\"100\" min=\"0\" matInput [placeholder]=\"subService + ' (Price per day ) '\"  [(ngModel)]=\"makeupPrice[subService]\"[ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'Choreographer'\">\n                            <div class=\"row\">\n                                <legend>Starting Price  </legend>\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                    <label>Per Day Price\n                                        <input type=\"checkbox\" [(ngModel)]=\"costPerControl\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Per Package Price\n                                    </label>\n                                </div>\n                                </div>\n                                <div class=\"col-md-3\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput min=\"1400\" [placeholder]=\"costPerControl?'Per Package Price':'Per Day Price'\" min=\"1400\"[formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>WWhat does starting price include (e.g include equipment, lighting etc) ?</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Starting Price Include\" [formControl]=\"startingPriceInclude\">\n                                    </mat-form-field>\n                                    <!-- <mat-form-field>\n                                        <mat-select  multiple placeholder=\"StartingPriceInclude\" name=\"startingPriceInclude\" [formControl]=\"startingPriceInclude\">\n                                            <mat-option value=\"include equipment\">include equipment</mat-option>\n                                            <mat-option value=\"lighting\">lighting</mat-option>\n                                        </mat-select>\n                                    </mat-form-field> -->\n                                </div>\n                            </div>\n                            <legend>Favourite Music Genres</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <mat-form-field>\n                                        <mat-select  multiple placeholder=\"FavouriteMusicGenres\" name=\"favouriteMusicGenres\" [formControl]=\"favouriteMusicGenres\">\n                                            <mat-option value=\"include equipment\">include equipment</mat-option>\n                                            <mat-option value=\"Commercial\">Commercial</mat-option>\n                                            <mat-option value=\"Punjabi\">Punjabi</mat-option>\n                                            <mat-option value=\"Hip Hop\">Hip Hop</mat-option>\n                                            <mat-option value=\"EDM\">EDM</mat-option>\n                                            <mat-option value=\"House\">House</mat-option>\n                                            <mat-option value=\"Bollywood\">Bollywood</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Do you regularly play at any club?</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>No\n                                            <input type=\"checkbox\" [(ngModel)]=\"regularlyPlayClubFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                            <span class=\"toggle\"></span>Yes\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-3\" *ngIf=\"regularlyPlayClubFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Mention club name\" [formControl]=\"regularlyPlayClub\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>How much experience you have </legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <mat-form-field>\n                                        <!-- <mat-label>Store</mat-label> -->\n                                        <mat-select placeholder = \"How much experience you have\" [formControl]=\"experiencedHave\">\n                                            <mat-option value=\"< 1 year\">< 1 year</mat-option>\n                                            <mat-option value=\"1-3 year\">1-3 year</mat-option>\n                                            <mat-option value=\"3-5 year\">3-5 year</mat-option>\n                                            <mat-option value=\"5 year +\">5 year +</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                          </div>\n                            <legend>Mention if any popular work, awards or recognition </legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\" >\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Mention if any popular work, awards or recognition\" [formControl]=\"popularWorkAward\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'MehndiArtist'\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Bridal Mehndi Price</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"1400\" matInput placeholder=\"Minimum price for bridal mehndi – 2 full hands & 2 feet\" [formControl]=\"bridalMehndiPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Family Mehndi Price (Per hand)</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Per hand\" [formControl]=\"familyMehndiPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'Photographer'\">\n                            <legend>Service Offered</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-4\">\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder=\"Service Offered\" name=\"servicePhoto\"(selectionChange)=\"selectPhotographyService($event)\" [formControl]=\"servicePhotography\" >\n                                            <mat-option value=\"Candid Photography\">Candid Photography</mat-option>\n                                            <mat-option value=\"Traditional Photography\">Traditional Photography</mat-option>\n                                            <mat-option value=\"Cinematic Video\">Cinematic Video</mat-option>\n                                            <mat-option value=\"Traditional Video\">Traditional Video</mat-option>\n                                            <mat-option value=\"Photo album\">Photo album</mat-option>\n                                            <mat-option value=\"Pre-wedding Shoot\">Pre-wedding Shoot</mat-option>\n                                            <mat-option value=\"Drone\">Drone</mat-option>\n                                            <mat-option value=\"Crane\">Crane</mat-option>\n                                            <mat-option value=\"Photobooth\">Photobooth</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>   \n                                </div>\n                                \n                            </div>\n                            <legend>Cost</legend>\n                            <div class=\"row\" *ngIf=\"servicePhotography.value.length\">\n                                        <!-- <legend>{{subService}}</legend> -->\n                                <div class=\"col-md-4\" *ngFor=\"let subService of servicePhotography.value\">\n                                    <mat-form-field class=\"input-group\" >\n                                        ₹<input type=\"number\" step=\"100\" min=\"1400\" matInput [placeholder]=\"subService + ' ( ' + placeHolder[subService] + ' ) '\"  [(ngModel)]=\"photographyCost[subService]\"[ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            \n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'Venue'\">\n                            <legend>Property Type</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <!-- <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"propertyType... *\" [formControl]=\"propertyType\">\n                                    </mat-form-field> -->\n                                    <mat-form-field>\n                                        <mat-select placeholder=\"Property Type\" name=\"popertyType\" [formControl]=\"propertyType\">\n                                            <mat-option value=\"4 star & Above\">4 star & Above</mat-option>\n                                            <mat-option value=\"Hotel\">Hotel</mat-option>\n                                            <mat-option value=\"Banquet Hall\">Banquet Hall</mat-option>\n                                            <mat-option value=\"Lawns/Farmhouse\">Lawns/Farmhouse</mat-option>\n                                            <mat-option value=\"Heritage Property\">Heritage Property</mat-option>\n                                            <mat-option value=\"Country/Golf Club\">Country/Golf Club</mat-option>\n                                            <mat-option value=\"Resort\">Resort</mat-option>\n                                            <mat-option value=\"Restaurant/Lounge Bar\">Restaurant/Lounge Bar</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>How do you charge ?</legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <div class=\"togglebutton\">\n                                        <label>Core Per Plate \n                                        <input type=\"checkbox\" [(ngModel)]=\"costPerControl\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Core Per Day\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"!costPerControl\">\n                                <div class=\"col-sm-5\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\" step=\"100\" min=\"1400\" matInput placeholder=\"Per Veg Plate Price(₹)\" [formControl]=\"perVegPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-5\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\"  step=\"100\" min=\"1200\"matInput placeholder=\"Per Non-Veg Plate Price(₹)\" [formControl]=\"perNonVegPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"costPerControl\">\n                                <div class=\"col-sm-10\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\" step=\"100\" min=\"11400\" matInput placeholder=\"Per Day Rent Price(₹)\" [formControl]=\"perDayPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Charge Way</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"chargeWay... *\" [formControl]=\"chargeWay\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                            <legend>Area</legend>\n                            <div *ngFor=\"let area of nameOfArea;let i = index\">\n                                <span *ngIf=\"i == 0\">Area:</span>\n                                <span *ngIf=\"i != 0\">Area {{i}}:</span>\n                                <div class=\"row\">\n                                    <div class=\"col-sm-3\">\n                                        <mat-form-field class=\"input-group\">\n                                            <!-- <input type=\"text\" matInput placeholder=\"Name Of Area... *\" [(ngModel)]=\"area.nameOfArea\"[ngModelOptions]=\"{standalone: true}\"> -->\n                                            <input type=\"text\" matInput placeholder=\"Name Of Area... *\" [formControl]=\"nameOfArea[i]\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                        <!-- <mat-form-field class=\"input-group\">\n                                            <input type=\"text\" matInput placeholder=\"typeOfArea... *\" [formControl]=\"typeOfArea\">\n                                        </mat-form-field> -->\n                                        <mat-form-field>\n                                            <!-- <mat-select placeholder=\"Type Of Area... *\" name=\"typeOfArea\" [(ngModel)]=\"area.typeOfArea\"[ngModelOptions]=\"{standalone: true}\"> -->\n                                                <mat-select placeholder=\"Type Of Area... *\" name=\"typeOfArea\" [formControl]=\"typeOfArea[i]\">\n                                                <mat-option value=\"Indoor\">Indoor</mat-option>\n                                                <mat-option value=\"OutDoor\">OutDoor</mat-option>\n                                                <mat-option value=\"Poolside\">Poolside</mat-option>\n                                                <mat-option value=\"Terrace\">Terrace</mat-option>\n                                                <mat-option value=\"Indoor & outdoor\">Indoor & outdoor</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <mat-form-field class=\"input-group\">\n                                            <!-- <input type=\"number\" matInput placeholder=\"Floating Capacity... *\" [(ngModel)]=\"area.floatingCapacity\"> -->\n                                            <input type=\"number\" matInput placeholder=\"Floating Capacity... *\" [formControl]=\"floatingCapacity[i]\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <mat-form-field class=\"input-group\">\n                                            <!-- <input type=\"number\" matInput placeholder=\"Fixed Capacity... *\" [formControl]=\"area.fixedCapacity\"> -->\n                                            <input type=\"number\" matInput placeholder=\"Fixed Capacity... *\" [formControl]=\"fixedCapacity[i]\">\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-sm-2\" (click)=\"areaClose(i)\">\n                                        <a href=\"javascript:void(0)\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-3\" style=\"margin: 10px 0px;\">\n                                    <a class=\"col-form-label\" style=\"cursor: pointer;color:red;\" (click)=\"addArea()\">+ Add new Area</a>\n                                </div>\n                            </div>\n                            <legend>Maximum Guest</legend>\n                            <div class=\"row\">\n                                  <!-- new -->\n                                  <div class=\"col-sm-6\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Maximum Guest Capacity... *\" [formControl]=\"maximumGuestCapacity\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <legend>Capacity</legend> -->\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Rooms Avaliable At your Venue</legend>\n                                    <div class=\"togglebutton\">\n                                        <label>NO\n                                            <input type=\"checkbox\" [formControl]=\"roomsAvaliable\">\n                                            <span class=\"toggle\"></span>\n                                            <!-- Toggle is on -->\n                                            YES\n                                        </label>\n                                    </div>\n                                </div>\n                                <!-- new -->\n                                <div class=\"col-md-6\" *ngIf=\"roomsAvaliable.value\">\n                                    <legend>No of Rooms</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"No of Rooms.. *\" [formControl]=\"noRoomsControl\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\" style=\"margin:10px 0px\">\n                                    <legend>ParkingFacility</legend>\n                                    <!-- <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"ParkingFacility... *\" [formControl]=\"parkingFacility\">\n                                    </mat-form-field> -->\n                                    <div class=\"togglebutton\">\n                                        <label>NO\n                                        <input type=\"checkbox\" [formControl]=\"parkingFacility\">\n                                        <span class=\"toggle\"></span>\n                                        <!-- Toggle is on -->\n                                        YES\n                                    </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-sm-6\" *ngIf=\"parkingFacility.value\">\n                                    <legend>No of Cars parked</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"No of Cars parked... *\" [formControl]=\"noCarsParkedControl\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div>\n                                        <legend>Food Policy</legend>\n                                        <div class=\"togglebutton\">\n                                            <label>In house catering not available\n                                                <input type=\"checkbox\"[formControl]=\"foodProvidedByVenue\">\n                                                <span class=\"toggle\"></span>\n                                                In house catering available\n                                            </label>\n                                        </div>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Outside cater not allowed\n                                                <input type=\"checkbox\"[formControl]=\"outsideCatererAllowed\">\n                                                <span class=\"toggle\"></span>\n                                                Outside caterer allowed\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <legend>DJ/Music Policy</legend>\n                                         <div class=\"togglebutton\">\n                                            <label>\n                                                In house DJ not available\n                                                <input type=\"checkbox\"[formControl]=\"DJPolicy\">\n                                                <span class=\"toggle\"></span>\n                                                In house DJ  available\n                                            </label>\n                                        </div>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Outside DJ not allowed\n                                                <input type=\"checkbox\"[formControl]=\"outsideDJ\">\n                                                <span class=\"toggle\"></span>\n                                                Outside DJ allowed\n                                            </label>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <legend>Alcohol Policy</legend>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                In house alcohol not available\n                                                <input type=\"checkbox\"[formControl]=\"alcoholPolicy\">\n                                                <span class=\"toggle\"></span>\n                                                In house alcohol available\n                                            </label>\n                                        </div>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Outside alcohol not allowed\n                                                <input type=\"checkbox\"[formControl]=\"outsideAlcohol\">\n                                                <span class=\"toggle\"></span>\n                                                Outside alcohol allowed\n                                             </label>\n                                        </div>\n                                    </div>\n                                    <div>\n                                        <legend>Decoration Policy</legend>\n                                        <mat-form-field>\n                                            <mat-select placeholder=\"Decoration Policy...\"  name=\"decorationPolicy\" [formControl]=\"decorationPolicy\">\n                                                <mat-option value=\"Fixed Decoration Available\">Fixed Decoration Available</mat-option>\n                                                <mat-option value=\"Decorators On Panel\">Decorators On Panel</mat-option>\n                                                <mat-option value=\"Outside Decorator Allowed\">Outside Decorator Allowed</mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                        <!-- <div class=\"togglebutton\">\n                                            <label>\n                                                FixedDecoration not available\n                                                <input type=\"checkbox\"[formControl]=\"fixedDecorationAvailable\"checked=\"\">\n                                                <span class=\"toggle\"></span>\n                                                FixedDecorationAvailable\n                                            </label>\n                                        </div>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                Decorators Off Panel\n                                                <input type=\"checkbox\"[formControl]=\"decoratorsOnPanel\">\n                                                <span class=\"toggle\"></span>\n                                                Decorators On Panel\n                                            </label>\n                                        </div>\n                                        <div class=\"togglebutton\">\n                                            <label>\n                                                OutsideDecorator not Allowed\n                                                <input type=\"checkbox\"[formControl]=\"outsideDecoratorAllowed\">\n                                                <span class=\"toggle\"></span>\n                                                OutsideDecoratorAllowed\n                                            </label>\n                                        </div> -->\n                                    </div>\n                                </div>\n                                \n                                <!-- <div class=\"col-md-6\">\n                                    <legend>DJ/Music Policy</legend>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                            In house DJ not available\n                                            <input type=\"checkbox\"[formControl]=\"DJPolicy\">\n                                            <span class=\"toggle\"></span>\n                                            In house DJ  available\n                                        </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                            <input type=\"checkbox\"[formControl]=\"alcoholPolicy\">\n                                            <span class=\"toggle\"></span>\n                                            Alcohol Policy\n                                        </label>\n                                    </div>\n                                </div> -->\n                                <div class=\"col-md-6\">\n                                    <legend>Additional Facilities</legend>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\"[formControl]=\"electricityBackup\">\n                <span class=\"toggle\"></span>\n                ElectricityBackup\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\"[formControl]=\"airConditioned\">\n                <span class=\"toggle\"></span>\n                AirConditioned\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\"[formControl]=\"restaurant\">\n                <span class=\"toggle\"></span>\n                Restaurant\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"bar\">\n                <span class=\"toggle\"></span>\n                Bar\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"conferenceCenter\">\n                <span class=\"toggle\"></span>\n                ConferenceCenter\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"wifi\">\n                <span class=\"toggle\"></span>\n                Wifi\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"spa\">\n                <span class=\"toggle\"></span>\n                Spa\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"valletParking\">\n                <span class=\"toggle\"></span>\n                ValletParking\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"bridalRoom\">\n                <span class=\"toggle\"></span>\n                BridalRoom\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"airportPickupDrop\">\n                <span class=\"toggle\"></span>\n                AirportPickupDrop\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"conciergeServices\">\n                <span class=\"toggle\"></span>\n                ConciergeServices\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"pool\">\n                <span class=\"toggle\"></span>\n                Pool\n              </label>\n                                    </div>\n                                    <div class=\"togglebutton\">\n                                        <label>\n                <input type=\"checkbox\" [formControl]=\"parking\">\n                <span class=\"toggle\"></span>\n                Parking\n              </label>\n                                    </div>\n                                </div>\n                            </div>\n                            \n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'WeddingDecorator'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>What is starting price for your services ?</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"125000\" matInput placeholder=\"What is starting price for your services?\" [formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Indoor decor starting Price</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Indoor decor starting Price... *\" [formControl]=\"indoorDecorStartingPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Outdoor Decor Starting Price</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Outdoor Decor Starting Price... *\" [formControl]=\"outdoorDecorStartingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Choose your core specialities</legend>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field>\n                                        <mat-select  multiple [formControl]=\"chooseCoreControl\" placeholder=\"Choose your core specialities\" (selectionChange)=\"changeChooseCore($event, 0)\">\n                                            <mat-option  value=\"Flowers\">Flowers</mat-option>\n                                            <mat-option  value=\"Banner Prints\">Banner Prints</mat-option>\n                                            <mat-option  value=\"Audio Visuals\">Audio Visuals</mat-option>\n                                            <mat-option  value=\"Decorative Draping\">Decorative Draping</mat-option>\n                                            <mat-option  value=\"Event Concert & design\">Event Concert & design</mat-option>\n                                            <mat-option  value=\"Lighting\">Lighting</mat-option>\n                                            <mat-option  value=\"Sounds\">Sounds</mat-option>\n                                            <mat-option  value=\"Furniture Rental\">Furniture Rental</mat-option>\n                                            <mat-option  value=\"Mandap\">Mandap</mat-option>\n                                            <mat-option  value=\"Car Decoration\">Car Decoration</mat-option>\n                                            <mat-option  value=\"Fireworks\">Fireworks</mat-option>\n                                            <mat-option  value=\"Tents\">Tents</mat-option>\n                                            <mat-option  value=\"Gift wrapping\">Gift wrapping</mat-option>\n                                            <mat-option  value=\"Home decoration\">Home decoration</mat-option>\n                                            <mat-option  value=\"centerpiece\">centerpiece</mat-option>\n                                            <mat-option  value=\"table decoration\">table decoration</mat-option>\n                                            <mat-option  value=\"venue entrances\">venue entrances</mat-option>\n                                            <mat-option  value=\"other\">other</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"checkOtherFlag\">\n                                <div class=\"col-md-6\">\n                                    <legend>Other Services</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Other Services... *\" [formControl]=\"otherServices\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Decor provided for</legend>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <mat-form-field>\n                                        <mat-select  [formControl]=\"decorProvidedFor\" placeholder=\"Decor provided for\" (selectionChange)=\"changeChooseCore($event)\">\n                                            <mat-option  value=\"wedding\">wedding</mat-option>\n                                            <mat-option  value=\"mehndi\">mehndi</mat-option>\n                                            <mat-option  value=\"sangeet\">sangeet</mat-option>\n                                            <mat-option  value=\"cocktail\">cocktail</mat-option>\n                                            <mat-option  value=\"corporate events\">corporate events</mat-option>\n                                            <mat-option  value=\"reception\">reception</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"flowers\" [formControl]=\"flowers\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"bannerPrints\" [formControl]=\"bannerPrints\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"audioVisuals\" [formControl]=\"audioVisuals\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"decorativeDraping\" [formControl]=\"decorativeDraping\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"eventConcertDesign\" [formControl]=\"eventConcertDesign\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"lighting\" [formControl]=\"lighting\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"sounds\" [formControl]=\"sounds\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"furnitureRental\" [formControl]=\"furnitureRental\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"mandap\" [formControl]=\"mandap\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"carDecoration\" [formControl]=\"carDecoration\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"fireworks\" [formControl]=\"fireworks\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"tents\" [formControl]=\"tents\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"giftWrapping\" [formControl]=\"giftWrapping\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"homeDecoration\" [formControl]=\"homeDecoration\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"centerpiece\" [formControl]=\"centerpiece\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"tableDecoration\" [formControl]=\"tableDecoration\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"entrances\" [formControl]=\"entrances\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'WeddingInvitation'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>What is your starting price for your services ?</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        ₹ &nbsp;<input type=\"number\" min = \"200\"matInput placeholder=\"Input Starting Price(ex:RS 1000)...\" min=\"1400\" step=\"100\"[formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Service Offered</legend>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                        <input type=\"checkbox\" [(ngModel)]=\"boxedInvitesFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Boxed Invites\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"boxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\"min=\"1200\" matInput placeholder=\"Minimum price\" [formControl]=\"boxedMinPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"boxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\"min=\"1400\" matInput placeholder=\"Maximum price\" [formControl]=\"boxedMaxPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"boxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\"min=\"20\" matInput placeholder=\"Minimum no. of cards\" [formControl]=\"boxedMinCards\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                        <input type=\"checkbox\" [(ngModel)]=\"unboxedInvitesFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Unboxed  Invites\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"unboxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"1200\"matInput placeholder=\"Minimum price\" [formControl]=\"unboxedMinPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"unboxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\"min=\"1400\" matInput placeholder=\"Maximum price\" [formControl]=\"unboxedMaxPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"unboxedInvitesFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"20\"matInput placeholder=\"Minimum no. of cards\" [formControl]=\"unboxedMinCards\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                        <input type=\"checkbox\" [(ngModel)]=\"digitalECardsFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Digital E-Cards,Only \n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"digitalECardsFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"1200\"matInput placeholder=\"Starting Price for E-cards \" [formControl]=\"ecardStartingPrice\">\n                                    </mat-form-field>\n                                </div>\n                                \n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                        <input type=\"checkbox\" [(ngModel)]=\"onlyCardDesignFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Card design(no printing)\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"onlyCardDesignFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" min=\"1200\"matInput placeholder=\"Starting price for designing  \" [formControl]=\"designingStartingPrice\">\n                                    </mat-form-field>\n                                </div>\n                                \n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>\n                                        <input type=\"checkbox\" [(ngModel)]=\"otherFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Other\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"otherFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"other services   \" [formControl]=\"other\">\n                                    </mat-form-field>\n                                </div>\n                                \n                            </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Boxed Invities</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"boxedInvites\" [formControl]=\"boxedInvites\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <legend>Un boxed Invities</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"unboxedInvites\" [formControl]=\"unboxedInvites\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <legend>Digital ECards</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"digitalECards\" [formControl]=\"digitalECards\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <legend>Only Card Design</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"onlyCardDesign\" [formControl]=\"onlyCardDesign\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>What is your speciality ?</legend>\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder=\"What is your speciality ?\" [formControl]=\"invitationSpeciality\" name=\"invitationSpeciality\">\n                                            <mat-option value=\"Traditional Invitations\">Traditional Invitations</mat-option>\n                                            <mat-option value=\"Funky Ofbeat Invitations\">Funky Ofbeat Invitations</mat-option>\n                                            <mat-option value=\"Handmade Cards\">Handmade Cards</mat-option>\n                                            <mat-option value=\"Modern Invites\">Modern Invites</mat-option>\n                                            <mat-option value=\"Boxed Invitations\">Boxed Invitations</mat-option>\n                                            <mat-option value=\"Wedding Stationery\">Wedding Stationery</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Where do you ship invites ? </legend>\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder=\"Where do you ship invites ?\" [formControl]=\"shipInvities\" name=\"shipInvities\">\n                                            <mat-option value=\"No Shipping\">No Shipping</mat-option>\n                                            <mat-option value=\"Domestic Shipping\">Domestic Shipping</mat-option>\n                                            <mat-option value=\"International Shipping\">International Shipping</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'WeddingPlanner'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Cities you’ve planned weddings in </legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Cities you’ve planned weddings in\" [formControl]=\"citiesPlannedWeddingIn\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Do you plan Destination weddings </legend>\n                                    <div class=\"togglebutton\">\n                                        <label>No\n                                        <input type=\"checkbox\" [formControl]=\"destinationWedding\">\n                                        <span class=\"toggle\"></span>\n                                        <!-- Toggle is on -->\n                                            Yes\n                                    </label>\n                                    <!-- <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"DestinationWedding\" [formControl]=\"destinationWedding\">\n                                    </mat-form-field> -->\n\n                                </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Starting Package Price </legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Starting Package Price\" min=\"250500\" [formControl]=\"startingPackagePrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>packageDetails </legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"PackageDetails\" [formControl]=\"packageDetails\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Type of Planning you offer ? </legend>\n                                    <mat-form-field>\n                                        <mat-select multiple [formControl]=\"typeOfPlanningOffer\">\n                                            <mat-option  value=\"Consultant\">Consultant</mat-option>\n                                            <mat-option  value=\"Coordination\">Coordination</mat-option>\n                                            <mat-option  value=\"Full planning\">Full planning</mat-option>\n                                            <mat-option  value=\"Partial planning\">Partial planning</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <!-- <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"TypeOfPlanningOffer\" [formControl]=\"typeOfPlanningOffer\">\n                                    </mat-form-field> -->\n                                </div>\n                            </div>\n                            <legend>Service Offered </legend>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <mat-form-field>\n                                        <mat-select multiple [formControl]=\"serviceOfferedSelect\">\n                                            <mat-option  value=\"Trousseau preperations\">Trousseau preperations</mat-option>\n                                            <mat-option  value=\"DJ/Music\">DJ/Music</mat-option>\n                                            <mat-option  value=\"decor\">decor</mat-option>\n                                            <mat-option  value=\"Photography Services\">Photography Services</mat-option>\n                                            <mat-option  value=\"Honeymoon\">Honeymoon</mat-option>\n                                            <mat-option  value=\"Service Staff\">Service Staff</mat-option>\n                                            <mat-option  value=\"Invitations\">Invitations</mat-option>\n                                            <mat-option  value=\"Catering\">Catering</mat-option>\n                                            <mat-option  value=\"PR and Media Coverage\">PR and Media Coverage</mat-option>\n                                            <mat-option  value=\"Gifts\">Gifts</mat-option>\n                                            <mat-option  value=\"Celebrity invites\">Celebrity invites</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"TrousseauPreperations\" [formControl]=\"trousseauPreperations\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"DJMusic\" [formControl]=\"DJMusic\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"VenueBooking\" [formControl]=\"venueBooking\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Decor\" [formControl]=\"decor\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"PhotographyServices\" [formControl]=\"photographyServices\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Honeymoon\" [formControl]=\"honeymoon\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"ServiceStaff\" [formControl]=\"serviceStaff\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Invitations\" [formControl]=\"invitations\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Catering\" [formControl]=\"catering\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"PRMediaCoverage\" [formControl]=\"PRMediaCoverage\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"Gifts\" [formControl]=\"gifts\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-2\">\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"number\" matInput placeholder=\"CelebrityInvites\" [formControl]=\"celebrityInvites\">\n                                    </mat-form-field>\n                                </div>\n                            </div> -->\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Your in-house services </legend>\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder=\"Your in-house services\"[formControl]=\"InHouseService\">\n                                            <mat-option  value=\"Trousseau preperations\">Trousseau preperations</mat-option>\n                                            <mat-option  value=\"DJ/Music\">DJ/Music</mat-option>\n                                            <mat-option  value=\"decor\">decor</mat-option>\n                                            <mat-option  value=\"Photography Services\">Photography Services</mat-option>\n                                            <mat-option  value=\"Honeymoon\">Honeymoon</mat-option>\n                                            <mat-option  value=\"Service Staff\">Service Staff</mat-option>\n                                            <mat-option  value=\"Invitations\">Invitations</mat-option>\n                                            <mat-option  value=\"Catering\">Catering</mat-option>\n                                            <mat-option  value=\"PR and Media Coverage\">PR and Media Coverage</mat-option>\n                                            <mat-option  value=\"Gifts\">Gifts</mat-option>\n                                            <mat-option  value=\"Celebrity invites\">Celebrity invites</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf = \"currentVendor.type == 'Caterer'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Starting Price</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        ₹ &nbsp;<input type=\"number\" matInput placeholder=\"Input Starting Price(ex:RS 1000)...\" min=\"1400\" step=\"100\" [formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <div class=\"togglebutton\">\n                                        <label>Core Per Plate \n                                        <input type=\"checkbox\" [(ngModel)]=\"costPerControl\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Core Per Day\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"!costPerControl\">\n                                <div class=\"col-sm-5\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\" step=\"100\" min=\"1400\" matInput placeholder=\"Per Veg Plate Price(₹)\" [formControl]=\"perVegPrice\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-5\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\"  step=\"100\" min=\"1200\"matInput placeholder=\"Per Non-Veg Plate Price(₹)\" [formControl]=\"perNonVegPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"costPerControl\">\n                                <div class=\"col-sm-10\">\n                                    <mat-form-field class=\"input-group\">\n                                        ₹<input type=\"number\" step=\"100\" min=\"11400\" matInput placeholder=\"Per Day Rent Price(₹)\" [formControl]=\"perDayPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Minimum number of people you cater to </legend>\n                                    <mat-form-field class=\"input-group\">\n                                        ₹ &nbsp;<input type=\"number\" matInput placeholder=\"Minimum number of people you cater to\" min=\"100\" step=\"100\" [formControl]=\"minNumberCater\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>What does your standard veg menu include (Mention no of starter, no of main course, no of desert) ?</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput [formControl]=\"standardVegInclude\">\n                                    </mat-form-field>\n                                    <!-- <mat-form-field>\n                                        <mat-select [formControl]=\"standardVegInclude\">\n                                            <mat-option  value=\"Mention no of starte\">Mention no of starter</mat-option>\n                                            <mat-option  value=\"no of main course\">no of main course</mat-option>\n                                            <mat-option  value=\"no of desert\">no of desert</mat-option>\n                                        </mat-select>\n                                    </mat-form-field> -->\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Speciality </legend>\n                                    <mat-form-field>\n                                        <mat-select [formControl]=\"speciality\">\n                                            <mat-option  value=\"Jain catering\">Jain catering</mat-option>\n                                            <mat-option  value=\"Vegetarian only catering\">Vegetarian only catering</mat-option>\n                                            <mat-option  value=\"Chaat & street food only\">Chaat & street food only</mat-option>\n                                            <mat-option  value=\"Drinks only\">Drinks only</mat-option>\n                                            <mat-option  value=\"Non vegetarian Only\">Non vegetarian Only</mat-option>\n                                            <mat-option  value=\"General service catering\">General service catering</mat-option>\n\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Cuisines offered by you</legend>\n                                    <mat-form-field>\n                                        <mat-select multiple [formControl]=\"cuisinesOffered\">\n                                            <mat-option  value=\"North Indian\">North Indian</mat-option>\n                                            <mat-option  value=\"South India\">South India</mat-option>\n                                            <mat-option  value=\"Chinese\">Chinese</mat-option>\n                                            <mat-option  value=\"Japanese\">Japanese</mat-option>\n                                            <mat-option  value=\"Italian\">Italian</mat-option>\n                                            <mat-option  value=\"Greek\">Greek</mat-option>\n                                            <mat-option  value=\"Lebanese\">Lebanese</mat-option>\n                                            <mat-option  value=\"Thai\">Thai</mat-option>\n                                            <mat-option  value=\"Desserts\">Desserts</mat-option>\n                                            <mat-option  value=\"Bengali\">Bengali</mat-option>\n                                            <mat-option  value=\"Gujrati\">Gujrati</mat-option>\n                                            <mat-option  value=\"rajasthani\">rajasthani</mat-option>\n                                            <mat-option  value=\"Goan\">Goan</mat-option>\n                                            <mat-option  value=\"Maharashtrian\">Maharashtrian</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Caterer type  </legend>\n                                    <mat-form-field>\n                                        <mat-select  [formControl]=\"catererType\">\n                                            <mat-option  value=\"Chaat provider only\">Chaat provider only</mat-option>\n                                            <mat-option  value=\"Specialised live counter items only\">Specialised live counter items only e.g Ice creams, Drinks, Desserts etc</mat-option>\n                                            <mat-option  value=\"You specialise in only one type of cuisines\">You specialise in only one type of cuisines e.g Italian only, Thai only etc</mat-option>\n                                            <mat-option  value=\"General caterer providing all services\">General caterer providing all services</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend *ngIf=\"catererType.value == 'Specialised live counter items only'\">Mention specialised item</legend>\n                                    <legend *ngIf=\"catererType.value == 'You specialise in only one type of cuisines'\">Mention specialised cuisines</legend>\n                                    <mat-form-field class=\"input-group\" *ngIf=\"catererType.value == 'Specialised live counter items only' || catererType.value == 'You specialise in only one type of cuisines'\">\n                                         &nbsp;<input type=\"text\" matInput [formControl]=\"catererContent\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf = \"currentVendor.type == 'TravelHoneymoon'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Starting Price for your services</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        ₹ &nbsp;<input type=\"number\" matInput placeholder=\"Starting Price for your services\" min=\"250500\"  step=\"100\" [formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <legend>Honeymoon package offered for</legend>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>Within India\n                                            <input type=\"checkbox\" [(ngModel)]=\"withinIndiaFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                            <span class=\"toggle\"></span>International Travel\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-9\" *ngIf=\"!withinIndiaFlag\">\n                                    <legend>Mention starting price per person for honeymoon packages for within india</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        &nbsp;<input type=\"number\" step=\"100\"min=\"0\" matInput  placeholder=\"Mention starting price per person for honeymoon packages for within india\" [formControl]=\"withinIndia\">\n                                   </mat-form-field>\n                                </div>\n                                <div class=\"col-md-9\" *ngIf=\"withinIndiaFlag\">\n                                    <legend>Mention starting price for honeymoon package for international travel</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        &nbsp;<input type=\"number\"  step=\"100\"min=\"0\" matInput  placeholder=\"Mention starting price for honeymoon package for international travel\" [formControl]=\"internationalTravel\">\n                                   </mat-form-field>\n                                </div>\n                            </div>\n                            <!-- <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <div class=\"togglebutton\">\n                                        <label>No\n                                            <input type=\"checkbox\" [(ngModel)]=\"internationalTravelFlag\" [ngModelOptions]=\"{standalone: true}\">\n                                            <span class=\"toggle\"></span>Yes\n                                        </label>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-3\" *ngIf=\"internationalTravelFlag\">\n                                    <mat-form-field class=\"input-group\">\n                                        &nbsp;<input type=\"text\" matInput  placeholder=\"International Travel\" [formControl]=\"internationalTravel\">\n                                   </mat-form-field>\n                                </div>\n                            </div> -->\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>What is your base location for providing services ? </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"text\" matInput  [formControl]=\"baseLocationProvidingService\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>What type of holidays does your company specialise in ? </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"text\" matInput  [formControl]=\"holidayCompany\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>What are popular honeymoon destinations you specialise in ? </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"text\" matInput  [formControl]=\"popularHoneymoonDestination\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>What all services do you help the couple book ? </legend>\n                                    <mat-form-field>\n                                        <!-- <mat-label>Advance for Booking(%) </mat-label> -->\n                                        <mat-select multiple [formControl]=\"helpCoubleBook\">\n                                            <mat-option  value=\"Accomodation\">Accomodation</mat-option>\n                                            <mat-option  value=\"Flights\">Flights</mat-option>\n                                            <mat-option  value=\"Local transportation & transfers\">Local transportation & transfers</mat-option>\n                                            <mat-option  value=\"Sight-seeing toursghts\">Sight-seeing tours</mat-option>\n                                            <mat-option  value=\"Others\">Others</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>how many days in advance should the couple reach out to you ?  </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"number\" matInput  [formControl]=\"howManyYearsAdvanceReach\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>How much experience you have in the business ?  </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"number\" matInput  [formControl]=\"experienceHave\">\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-sm-6\">\n                                    <legend>Awards, recognition & publications </legend>\n                                    <mat-form-field class=\"input-group\">\n                                         &nbsp;<input type=\"number\" matInput  [formControl]=\"awardsRecognitionPublications\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'BridalMakeupArtist' \">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Brands Used</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        <input type=\"text\" matInput placeholder=\"Brands Used *\" [formControl]=\"brandsUsed\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"currentVendor.type == 'PriestPandit'\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-10\">\n                                    <legend>Starting price for your service</legend>\n                                    <mat-form-field class=\"input-group\">\n                                        ₹ &nbsp;<input type=\"number\" min=\"1400\"matInput placeholder=\"Starting price for your service\" min=\"1400\" step=\"100\" [formControl]=\"startingPrice\">\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>Service offered</legend>\n                                    <mat-form-field>\n                                        <mat-select multiple [formControl]=\"serviceOfferPriestControl\">\n                                            <mat-option  value=\"Pre-wedding(Roka) puja/hawan\">Pre-wedding(Roka) puja/hawan</mat-option>\n                                            <mat-option  value=\"wedding puja/hawan\">wedding puja/hawan</mat-option>\n                                            <mat-option  value=\"Matching kundlis\">Matching kundlis</mat-option>\n                                            <mat-option  value=\"Astrology\">Astrology</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\" *ngIf=\"(serviceOfferPriestControl.value.length > 0)\">\n                                <div class=\"col-sm-6\" *ngFor=\"let subService of serviceOfferPriestControl.value\">\n                                    <mat-form-field class=\"input-group\" >\n                                        ₹&nbsp; <input type=\"number\" step=\"100\" min=\"1400\" matInput [placeholder]=\"'Mention your charges for ' + subService\"  [(ngModel)]=\"service_priest[subService]\"[ngModelOptions]=\"{standalone: true}\">\n                                    </mat-form-field>\n                                 </div>\n                            </div>\n                            <div class=\"row\">\n                                <legend>Samagri Included or not included</legend>\n                                <div class=\"col-sm-10\">\n                                    <div class=\"togglebutton\">\n                                        <label>not included \n                                        <input type=\"checkbox\" [(ngModel)]=\"samagriIncluded\" [ngModelOptions]=\"{standalone: true}\">\n                                        <span class=\"toggle\"></span>\n                                        Included\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-sm-6\">\n                                    <legend>What all languages do you know ? </legend>\n                                    <mat-form-field>\n                                        <mat-select multiple placeholder = \"What all languages do you know ?\"[formControl]=\"languagesKnow\">\n                                            <mat-option  value=\"Hindi\">Hindi</mat-option>\n                                            <mat-option  value=\"Tamil\">Tamil</mat-option>\n                                            <mat-option  value=\"Telugu\">Telugu</mat-option>\n                                            <mat-option  value=\"Marathi\">Marathi</mat-option>\n                                            <mat-option  value=\"Kannada\">Kannada</mat-option>\n                                            <mat-option  value=\"Punjabi\">Punjabi</mat-option>\n                                            <mat-option  value=\"Bengali\">Bengali</mat-option>\n                                            <mat-option  value=\"Sanskrit\">Sanskrit</mat-option>\n                                            <mat-option  value=\"English\">English</mat-option>\n                                            <mat-option  value=\"Gujarati\">Gujarati</mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- policy new -->\n                        <!-- other work Location -->\n                        <legend>Payment Policy</legend>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <mat-form-field>\n                                    <mat-label>Advance for Booking(%) </mat-label>\n                                    <mat-select [formControl]=\"advanceBookingControl\">\n                                        <mat-option *ngFor=\"let percent of percentArr\" [value]=\"percent\">{{percent}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <mat-form-field>\n                                    <mat-label>Payment on Event Date(%)</mat-label>\n                                    <mat-select [formControl]=\"paymentEventDateControl\">\n                                        <mat-option *ngFor=\"let percent of percentArr\" [value]=\"percent\">{{percent}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <mat-form-field>\n                                    <mat-label>Payment on Delivery(%)</mat-label>\n                                    <mat-select [formControl]=\"peymentDeliveryControl\">\n                                        <mat-option *ngFor=\"let percent of percentArr\" [value]=\"percent\">{{percent}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <legend>Cancellation Policy</legend>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <mat-form-field>\n                                    <!-- <mat-label>Advance for Booking(%) </mat-label> -->\n                                    <mat-select [formControl]=\"cancellationPolicy\">\n                                        <mat-option  value=\"No charge for cancellation\">No charge for cancellation</mat-option>\n                                        <mat-option  value=\"% Charged for cancellation\">% Charged for cancellation</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-3\" *ngIf=\"cancellationPolicy.value == '% Charged for cancellation'\">\n                                <mat-form-field>\n                                    <mat-label>% Charged for cancellation</mat-label>\n                                    <mat-select [formControl]=\"cancelPercentControl\">\n                                        <mat-option *ngFor=\"let percent of percentArr\" [value]=\"percent\">{{percent}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <legend>Trial Policy</legend>\n                        <div class=\"row\">\n                            <div class=\"col-sm-3\">\n                                <mat-form-field>\n                                    <!-- <mat-label>Advance for Booking(%) </mat-label> -->\n                                    <mat-select [formControl]=\"trialPolicy\">\n                                        <mat-option  value=\"Free visit available\">Free visit available</mat-option>\n                                        <mat-option  value=\"No visit before booking\">No visit before booking</mat-option>\n                                        <mat-option  value=\"Visit available after some amount\">Visit available after some amount</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <!-- other work Location -->\n                        <div class=\"row\" *ngIf=\"currentVendor.type != 'Venue' && currentVendor.type != 'BridalDesigner' && currentVendor.type != 'BandBajaGhodiwala' && currentVendor.type != 'Caterer' && currentVendor.type !='WeddingDecorator'  && currentVendor.type !='WeddingInvitation' && currentVendor.type != 'Choreographer' && currentVendor.type != 'TravelHoneymoon'\">\n                            <div class=\"col-sm-10\">\n                                <legend>Other Work Location</legend>\n                                <mat-form-field>\n                                    <mat-label>Select</mat-label>\n                                    <mat-select [formControl]=\"otherWorkLocation\" multiple [(value)]=\"otherWorkLocation.name\">\n                                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">{{city.name}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button mat-raised-button type=\"submit\" color=\"danger\" class=\"btn btn-danger btn-raised btn-round\">\n                            Save Service Info\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/vendor.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/vendor.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <!-- <img class=\"img_bg\" src=\"../../../assets/img/bg/4.jpg\" style=\"height: 400px;\" alt=\"\">\n  <div class=\"img_black\"style=\"height: 400px;\"></div> -->\n    <!-- <div class=\"page-header1 wedding\"style=\"height: 400px;\"> -->\n    <!-- <h1>WeddingDetails</h1> -->\n    <!-- </div> -->\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form *ngIf=\"vendorbasicForm\" [formGroup]=\"vendorbasicForm\" (ngSubmit)=\"submit()\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <p style=\"font-size:25px;font-weight: bold;padding:5px\">\n                                    You can input or change your Basic Detail Info.\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Business name</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"Business name... *\" [formControl]=\"brandname\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Business Introduction</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"Business Introduction... *\" [formControl]=\"introduction\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-6\">\n                                <legend>Working Since (optional)</legend>\n                                <!-- <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"Input Year...\" min=\"1990\" max=\"2020\" [formControl]=\"workingSince\">\n                                </mat-form-field> -->\n                                <mat-form-field>\n                                    <mat-select placeholder=\"Select Year\" name=\"year\" [formControl]=\"workingSince\"(selectionChange)=\"changeChooseCore($event)\">\n                                        <mat-option value=\"1990\">1990</mat-option>\n                                        <mat-option value=\"1991\">1991</mat-option>\n                                        <mat-option value=\"1992\">1992</mat-option>\n                                        <mat-option value=\"1993\">1993</mat-option>\n                                        <mat-option value=\"1994\">1994</mat-option>\n                                        <mat-option value=\"1995\">1995</mat-option>\n                                        <mat-option value=\"1996\">1996</mat-option>\n                                        <mat-option value=\"1997\">1997</mat-option>\n                                        <mat-option value=\"1998\">1998</mat-option>\n                                        <mat-option value=\"1999\">1999</mat-option>\n                                        <mat-option value=\"2000\">2000</mat-option>\n                                        <mat-option value=\"2001\">2001</mat-option>\n                                        <mat-option value=\"2002\">2002</mat-option>\n                                        <mat-option value=\"2003\">2003</mat-option>\n                                        <mat-option value=\"2004\">2004</mat-option>\n                                        <mat-option value=\"2005\">2005</mat-option>\n                                        <mat-option value=\"2006\">2006</mat-option>\n                                        <mat-option value=\"2007\">2007</mat-option>\n                                        <mat-option value=\"2008\">2008</mat-option>\n                                        <mat-option value=\"2009\">2009</mat-option>\n                                        <mat-option value=\"2010\">2010</mat-option>\n                                        <mat-option value=\"2011\">2011</mat-option>\n                                        <mat-option value=\"2012\">2012</mat-option>\n                                        <mat-option value=\"2013\">2013</mat-option>\n                                        <mat-option value=\"2014\">2014</mat-option>\n                                        <mat-option value=\"2015\">2015</mat-option>\n                                        <mat-option value=\"2016\">2016</mat-option>\n                                        <mat-option value=\"2017\">2017</mat-option>\n                                        <mat-option value=\"2018\">2018</mat-option>\n                                        <mat-option value=\"2019\">2019</mat-option>\n                                        <mat-option value=\"2020\">2020</mat-option>\n                                        <mat-option value=\"2021\">2021</mat-option>\n                                        <mat-option value=\"Other\">Other</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-6\" *ngIf=\"workingSinceFlag\">\n                                <legend>Other Specified Year</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"number\" matInput placeholder=\"Other Specified Year\" [formControl]=\"otherSpecifiedYear\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <!-- <div class=\"row\">\n                            <div class=\"col-sm-10\">\n                                <legend>Starting Price</legend>\n                                <mat-form-field class=\"input-group\">\n                                    ₹ &nbsp;<input type=\"number\" matInput placeholder=\"Input Price(ex:RS 1000)...\" min=\"100\" step=\"100\" [formControl]=\"basicPrice\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"currentVendor.type == 'Venue'\">\n                            <div class=\"col-sm-10\">\n                                <div class=\"togglebutton\">\n                                    <label>Core Per Plate \n                                    <input type=\"checkbox\" [(ngModel)]=\"costPerControl\" [ngModelOptions]=\"{standalone: true}\">\n                                    <span class=\"toggle\"></span>\n                                    Core Per Day\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"!costPerControl && currentVendor.type == 'Venue'\">\n                            <div class=\"col-sm-5\">\n                                <mat-form-field class=\"input-group\">\n                                    ₹<input type=\"number\" step=\"100\" min=\"0\" matInput placeholder=\"Per Veg Plate Price(₹)\" [formControl]=\"perVegPrice\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-5\">\n                                <mat-form-field class=\"input-group\">\n                                    ₹<input type=\"number\"  step=\"100\" min=\"0\"matInput placeholder=\"Per Non-Veg Plate Price(₹)\" [formControl]=\"perNonVegPrice\">\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"costPerControl  && currentVendor.type == 'Venue'\">\n                            <div class=\"col-sm-10\">\n                                <mat-form-field class=\"input-group\">\n                                    ₹<input type=\"number\" step=\"100\" min=\"0\" matInput placeholder=\"Per Day Rent Price(₹)\" [formControl]=\"perDayPrice\">\n                                </mat-form-field>\n                            </div>\n                        </div> -->\n                    </div>\n                    <div class=\"card-footer\">\n                        <button mat-raised-button type=\"submit\" color=\"danger\" class=\"btn btn-danger btn-raised btn-round\">\n                            Save Basic details\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vendor/verify/verify.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vendor/verify/verify.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <p style=\"font-size:25px;font-weight: bold;padding:5px\">\n                                    You can verify Email & Phone number OPT &nbsp;&nbsp;<i class=\"material-icons\" style=\"color:green\" *ngIf=\"currentVendor.verifyStatus.emailVerify && currentVendor.verifyStatus.phoneVerify\">verified_user</i>\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-5\">\n                                <legend>Email &nbsp;<span><i class=\"material-icons\" style=\"color:green\" *ngIf=\"currentVendor.verifyStatus.emailVerify\">check_circle</i></span></legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"Email... *\" [formControl]=\"emailcontrol\" readonly>\n                                </mat-form-field>\n                                <a (click)=\"resendEmail()\" *ngIf=\"!currentVendor.verifyStatus.emailVerify\" style=\"cursor: pointer; color: brown;margin: 13px;\">Resend Message</a>\n                            </div>\n                            <div class=\"col-sm-5\" *ngIf=\"isEmail\">\n                                <legend>Email Verification Code</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"Email Verification Code... *\" [formControl]=\"emailcontrolCode\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"isEmail\">\n                                <button mat-raised-button (click)=\"sendEmail()\" color=\"danger\" style=\"width: 64%;height: 46%;font-size: 21px;\" class=\"btn btn-danger btn-raised btn-round\">\n                                    VERIFY\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-5\">\n                                <legend style=\"margin-top:10px\"> Phone Number &nbsp;<span><i class=\"material-icons\" style=\"color:green\" *ngIf=\"currentVendor.verifyStatus.phoneVerify\">check_circle</i></span></legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"phone number... *\" [formControl]=\"phonecontrol\" readonly>\n                                </mat-form-field>\n                                <a (click)=\"resendPhone()\" *ngIf=\"!currentVendor.verifyStatus.phoneVerify\" style=\"cursor: pointer; color: brown;margin: 13px;\">Resend Message</a>\n                            </div>\n                            <div class=\"col-sm-5\" *ngIf=\"isPhone\">\n                                <legend style=\"margin-top:10px\">Phone Number Verification Code</legend>\n                                <mat-form-field class=\"input-group\">\n                                    <input type=\"text\" matInput placeholder=\"phone number verification Code... *\" [formControl]=\"phonecontrolCode\">\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-sm-2\" *ngIf=\"isPhone\">\n                                <button mat-raised-button (click)=\"sendPhone()\" color=\"danger\" style=\"width: 64%;height: 46%;font-size: 21px;\" class=\"btn btn-danger btn-raised btn-round\">\n                                VERIFY\n                            </button>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n                <div class=\"card-body\" style=\"padding-left: 38px;\">\n                    <div class=\"row\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\" style=\"color: #9C27B0;\">\n                                <input class=\"form-check-input\" type=\"checkbox\"  (click)=\"agreeTerm()\" [(ngModel)]=\"agreeFlag\">\n                                <span class=\"form-check-sign\">\n                                    <span class=\"check\"></span>\n                                </span>\n                                I agree to Terms and Conditions.\n\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <button class=\"btn btn-danger\" (click) =\"submitProfile()\"[disabled]=\"!agreeFlag\">\n                                Submit Profile\n                            </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/vendor/contactinfo/contactinfo.component.css":
/*!**************************************************************!*\
  !*** ./src/app/vendor/contactinfo/contactinfo.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_bg{\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n  }\r\n  .img_black{\r\n    position: absolute;\r\n    width: 100%;\r\n    height:100%;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(lightgray) , to(black));\r\n    background-image: linear-gradient(to bottom, lightgray , black);\r\n    opacity: 0.6;\r\n  }\r\n  section{\r\n    position: relative;\r\n    /* height: 400px; */\r\n  }\r\n  .page-header1>h1{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 30px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color:white;\r\n  }\r\n  legend{\r\n    font-size: 18px;\r\n    color: gray;\r\n  \r\n  }\r\n  .card-footer{\r\n    background-color: transparent;\r\n  }\r\n  legend{\r\n      \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL2NvbnRhY3RpbmZvL2NvbnRhY3RpbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsOEZBQStEO0lBQS9ELCtEQUErRDtJQUMvRCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsV0FBVzs7RUFFYjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7O0VBRUEiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvY29udGFjdGluZm8vY29udGFjdGluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdfYmd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuaW1nX2JsYWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGxpZ2h0Z3JheSAsIGJsYWNrKTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbiAgc2VjdGlvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGhlaWdodDogNDAwcHg7ICovXHJcbiAgfVxyXG4gIC5wYWdlLWhlYWRlcjE+aDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgbGVnZW5ke1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgXHJcbiAgfVxyXG4gIC5jYXJkLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBsZWdlbmR7XHJcbiAgICAgIFxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/contactinfo/contactinfo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/vendor/contactinfo/contactinfo.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactinfoComponent", function() { return ContactinfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var ContactinfoComponent = /** @class */ (function () {
    function ContactinfoComponent(formBuilder, auth) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.websiteUrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.facebookPageLink = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.instagramPageLink = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.contactPersonName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.anotherNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.businessAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
        this.businessCity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.area = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.pincode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
        this.locationsAll = [];
        this.locations = [];
        this.currentVendor = JSON.parse(localStorage.getItem('current_vendor'));
        console.log('>>>>>>>>>>');
        console.log(this.currentVendor);
        if (this.currentVendor.websiteUrl)
            this.websiteUrl.setValue(this.currentVendor.websiteUrl);
        this.auth.getCities().subscribe(function (res) {
            _this.cities = res;
        });
        if (this.currentVendor.businessCity) {
            this.businessCity.setValue(Number(this.currentVendor.businessCity));
            this.auth.getLocations().subscribe(function (res) {
                // this.locations = res;
                _this.locationsAll = Object.keys(res).map(function (i) { return res[i]; });
                _this.onChangeCity(_this.currentVendor.businessCity);
                if (_this.currentVendor.area)
                    _this.area.setValue(_this.currentVendor.area);
            });
        }
        if (this.currentVendor.businessAddress)
            this.businessAddress.setValue(this.currentVendor.businessAddress);
        if (this.currentVendor.facebookPageLink)
            this.facebookPageLink.setValue(this.currentVendor.facebookPageLink);
        if (this.currentVendor.instagramPageLink)
            this.instagramPageLink.setValue(this.currentVendor.instagramPageLink);
        if (this.currentVendor.contactPersonName)
            this.contactPersonName.setValue(this.currentVendor.contactPersonName);
        if (this.currentVendor.anotherNumber)
            this.anotherNumber.setValue(this.currentVendor.anotherNumber);
        if (this.currentVendor.pincode)
            this.pincode.setValue(this.currentVendor.pincode);
    }
    ContactinfoComponent.prototype.ngOnInit = function () {
        // if(this.currentVendor.brandname)
        //   this.brandname.setValue(this.currentVendor.brandname);
        // if(this.currentVendor.introduction)
        //   this.introduction.setValue(this.currentVendor.introduction);
        // if(this.currentVendor.workingSince)
        //   this.workingSince.setValue(this.currentVendor.workingSince);
        this.contactInfoForm = this.formBuilder.group({
            _id: this.currentVendor._id,
            websiteUrl: this.websiteUrl,
            modifiedBy: this.currentVendor.brandname,
            facebookPageLink: this.facebookPageLink,
            instagramPageLink: this.instagramPageLink,
            contactPersonName: this.contactPersonName,
            anotherNumber: this.anotherNumber,
            businessAddress: this.businessAddress,
            businessCity: this.businessCity,
            area: this.area,
            pincode: this.pincode,
            type: this.currentVendor.type,
        });
        // this.currentVendor = JSON.parse(localStorage.getItem('current_vendor'));
        // if(this.currentVendor.websiteUrl)
        //   this.contactInfoForm.controls['websiteUrl'].setValue(this.currentVendor.websiteUrl);
        // if(this.currentVendor.businessCity)
        //    this.contactInfoForm.controls['businessCity'].setValue(Number(this.currentVendor.businessCity));
        // if(this.currentVendor.facebookPageLink)
        // this.contactInfoForm.controls['facebookPageLink'].setValue(this.currentVendor.facebookPageLink);
        // if(this.currentVendor.instagramPageLink)
        // this.contactInfoForm.controls['instagramPageLink'].setValue(this.currentVendor.instagramPageLink);
        // if(this.currentVendor.contactPersonName)
        // this.contactInfoForm.controls['contactPersonName'].setValue(this.currentVendor.contactPersonName);
        // if(this.currentVendor.anotherNumber)
        // this.contactInfoForm.controls['anotherNumber'].setValue(this.currentVendor.anotherNumber);
        // if(this.currentVendor.businessAddress)
        // this.contactInfoForm.controls['businessAddress'].setValue(this.currentVendor.businessAddress);
        // if(this.currentVendor.area)
        // this.contactInfoForm.controls['area'].setValue(this.currentVendor.area);
        // if(this.currentVendor.pincode)
        // this.contactInfoForm.controls['pincode'].setValue(this.currentVendor.pincode);
        this.onValueChanges();
    };
    ContactinfoComponent.prototype.submit = function () {
        var _this = this;
        var tempVendor;
        tempVendor = JSON.parse(localStorage.getItem('current_vendor'));
        this.contactInfoForm = this.formBuilder.group({
            _id: this.currentVendor._id,
            websiteUrl: this.websiteUrl,
            modifiedBy: this.currentVendor.brandname,
            facebookPageLink: this.facebookPageLink,
            instagramPageLink: this.instagramPageLink,
            contactPersonName: this.contactPersonName,
            anotherNumber: this.anotherNumber,
            businessAddress: this.businessAddress,
            businessCity: this.businessCity,
            area: this.area,
            pincode: this.pincode,
            type: this.currentVendor.type,
            contactInfoStatus: true
        });
        this.auth.updateVendorDetails(this.contactInfoForm.value).subscribe(function (res) {
            // console.log('contact Info');
            console.log(res);
            if (_this.websiteUrl.value != '')
                tempVendor.websiteUrl = _this.websiteUrl.value;
            if (_this.facebookPageLink.value != '')
                tempVendor.facebookPageLink = _this.facebookPageLink.value;
            if (_this.instagramPageLink.value != '')
                tempVendor.instagramPageLink = _this.instagramPageLink.value;
            if (_this.contactPersonName.value != '')
                tempVendor.contactPersonName = _this.contactPersonName.value;
            if (_this.anotherNumber.value != '')
                tempVendor.anotherNumber = _this.anotherNumber.value;
            tempVendor.businessAddress = _this.businessAddress.value;
            tempVendor.businessCity = _this.businessCity.value;
            tempVendor.area = _this.area.value;
            tempVendor.pincode = _this.pincode.value;
            tempVendor.basicStatus.contactInfoStatus = true;
            localStorage.setItem('current_vendor', JSON.stringify(tempVendor));
            _this.auth.showSwal('success-message', 'Welcome', 'you have just Saved in successfully');
        }, function (err) {
            _this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!');
        });
        // this.auth.signIn(this.clientprofileForm.value);
        // console.log('login');
    };
    ContactinfoComponent.prototype.onChangeCity = function (val) {
        var _this = this;
        console.log('on change city');
        // this.locationSel = val;
        // this.locations = this.locationsAll;
        this.locations = [];
        console.log(val);
        // console.log(this.locationsAll)
        // this.locations = this.locationsAll.filter(element => element['cityId']['value'] == val)
        // this.locations = this.locationsAll.find(element => element['cityId']['value'] == val)
        console.log(this.locationsAll);
        this.locationsAll.forEach(function (element) {
            if (element.cityId.value == val)
                _this.locations.push(element);
        });
        console.log(this.locations);
    };
    ContactinfoComponent.prototype.onValueChanges = function () {
        var _this = this;
        // this.clientprofileForm.valueChanges.subscribe(val=>{
        //   console.log(val);
        // })
        this.contactInfoForm.get('businessCity').valueChanges.subscribe(function (val) {
            _this.onChangeCity(val);
        });
    };
    ContactinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactinfo',
            template: __webpack_require__(/*! raw-loader!./contactinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/contactinfo/contactinfo.component.html"),
            styles: [__webpack_require__(/*! ./contactinfo.component.css */ "./src/app/vendor/contactinfo/contactinfo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthWedService"]])
    ], ContactinfoComponent);
    return ContactinfoComponent;
}());



/***/ }),

/***/ "./src/app/vendor/leads/leads.component.css":
/*!**************************************************!*\
  !*** ./src/app/vendor/leads/leads.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* new search pagination */\r\n.fa-check-circle {\r\n    color: green;\r\n}\r\n.fa-times-circle {\r\n    color: red;\r\n}\r\n.my-freaky-tooltip .arrow::before {\r\n    border-top-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-freaky-tooltip .tooltip-inner {\r\n    background-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-freaky-tooltip {\r\n    background-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-custom-class .tooltip-inner {\r\n    background-color: darkgreen;\r\n    font-size: 125%;\r\n    opacity: 1!important;\r\n}\r\n.my-custom-class .arrow::before {\r\n    border-top-color: darkgreen;\r\n    opacity: 1!important;\r\n}\r\n.page-item.active .page-link {\r\n    z-index: 1;\r\n    color: #ffffff!important;\r\n    background-color: #f44336!important;\r\n    border-color: #f44336!important;\r\n}\r\n.page-item.active .page-link {\r\n    z-index: 1;\r\n    color: #fff!important;\r\n    background-color: #f44336!important;\r\n    border-color: #f44336!important;\r\n}\r\n.padding-zero {\r\n    padding: 0;\r\n}\r\n.margin-zero {\r\n    margin: 0;\r\n}\r\n/* similar home */\r\n.second_section {\r\n    height: 250px!important;\r\n}\r\nsection {\r\n    background-color: rgba(253, 150, 181, 0.048);\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\nimg {\r\n    border-radius: 10%;\r\n}\r\n.first {\r\n    background-color: white;\r\n}\r\n/* .fSec{\r\n  } */\r\n.vertical_center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.col-md-3 {\r\n    padding-bottom: 40px;\r\n}\r\n.second_section>img {\r\n    position: absolute;\r\n    border-radius: 0%;\r\n    border: 0;\r\n    width: 100%;\r\n    height: 250px;\r\n    -webkit-filter: brightness(0.2);\r\n            filter: brightness(0.2);\r\n    /* filter: blur(10px) brightness(50%); */\r\n}\r\n.second_section * {\r\n    color: white;\r\n}\r\n.second_section i {\r\n    font-size: 52px;\r\n}\r\n.footer_url {\r\n    font-size: smaller;\r\n}\r\n.footer_url>p {\r\n    margin-bottom: 3px;\r\n}\r\n.footer-social-icons {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.footer_last>.col-md-2 {\r\n    padding-bottom: 5px;\r\n}\r\n.footer_last {\r\n    padding-bottom: 30px;\r\n}\r\n.footer-social-icons img {\r\n    width: 100%;\r\n}\r\n.home-page-assured-content {\r\n    width: 72px!important;\r\n    height: 72px!important;\r\n    color: #999;\r\n    background: #f4f4f4;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n/* Introducing SS Assured Vendor Badge  */\r\n.home-page-assured-content-option {\r\n    font-size: 12px;\r\n    /* margin: 0px; */\r\n    color: #666;\r\n    margin-left: -20px;\r\n    padding: 0px 0 0 0px;\r\n    font-family: lato light;\r\n}\r\n.home-page-assured-content i {\r\n    font-size: 30px;\r\n    line-height: 72px;\r\n    float: none;\r\n    color: #999;\r\n    margin: 0;\r\n}\r\n.vndr-hm-ct {\r\n    color: #000;\r\n}\r\n.vendor-home-page-category {\r\n    margin-bottom: 20px;\r\n    font-size: 30px;\r\n}\r\n.section-title-home-page {\r\n    font-size: 32px;\r\n    color: #000;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    padding-bottom: 5px;\r\n}\r\n.see-all-list {\r\n    color: #fa4a6f;\r\n    line-height: 54px;\r\n    font-size: 16px;\r\n}\r\n.color-pink {\r\n    color: #fa4a6f!important;\r\n}\r\n.book_a_vendor {\r\n    min-height: 26vh!important;\r\n}\r\n/* selector */\r\n.vendorsFilters__options {\r\n    margin-top: 20px!important;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__label {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 80%;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\nul.vendorsFilters__options {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n/* selector */\r\n.vendorsFilters__section {\r\n    border-bottom: 1px solid #d9d9d9;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 25px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__title {\r\n    font-size: 18px;\r\n    line-height: 28px;\r\n}\r\n.vendorsFilters .toggleActive .vendorsFilters__toggleUp {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n}\r\n.vendorsFilters__toggleUp {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    cursor: pointer;\r\n}\r\n.svgIcon {\r\n    width: 16px;\r\n    height: 16px;\r\n    display: inline-block;\r\n    line-height: 0;\r\n}\r\n.vendorsFilters__toggleUp svg {\r\n    fill: #8c8c8c;\r\n}\r\n.svgIcon svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n.vendorsFilters__options {\r\n    margin-top: 20px;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__label {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 80%;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n/* category */\r\n.jguhHf {\r\n    font-family: proxima-nova, sans-serif;\r\n}\r\n.shadow_one {\r\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .05);\r\n    -moz-box-shadow: rgba(0, 0, 0, .05) 0 1px 5px 0, 0 1px 2px rgba(0, 0, 0, .05);\r\n    -webkit-box-shadow: rgba(0, 0, 0, .05) 0 1px 5px 0, 0 1px 2px rgba(0, 0, 0, .05);\r\n}\r\n.wFnqD {\r\n    box-sizing: border-box;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.__react_component_tooltip.place-top {\r\n    margin-top: -10px;\r\n}\r\n.__react_component_tooltip.type-dark {\r\n    color: #fff;\r\n    background-color: #222;\r\n}\r\n.__react_component_tooltip.place-right {\r\n    margin-left: 10px;\r\n}\r\n.__react_component_tooltip.type-light {\r\n    color: #222;\r\n    background-color: #fff;\r\n}\r\n.tooltip-info,\r\n.PrimaryVendorCard .tooltip-info {\r\n    padding: 5px!important;\r\n    width: 350px;\r\n    line-height: 15px!important;\r\n}\r\n.text-bold {\r\n    font-weight: bold!important;\r\n}\r\n.__react_component_tooltip {\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    left: -999em;\r\n    opacity: 0;\r\n    padding: 8px 21px;\r\n    position: fixed;\r\n    pointer-events: none;\r\n    -webkit-transition: opacity 0.3s ease-out;\r\n    transition: opacity 0.3s ease-out;\r\n    top: -999em;\r\n    visibility: hidden;\r\n    z-index: 999;\r\n}\r\n.app-toggle-box i:before {\r\n    content: \"\\f106\";\r\n}\r\n.app-toggle-box.collapsed i:before {\r\n    content: \"\\f107\";\r\n}\r\n.__react_component_tooltip.show {\r\n    opacity: 1!important;\r\n    box-shadow: 0 0 1px 0 #909090;\r\n}\r\n.__react_component_tooltip.show {\r\n    opacity: 0.9;\r\n    margin-top: 0px;\r\n    margin-left: 0px;\r\n    visibility: visible;\r\n}\r\n.PrimaryVendorCard .vendor-card {\r\n    background-color: #fff;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-picture {\r\n    background: #d7d7d7;\r\n    width: 100%;\r\n    height: 210px;\r\n    position: relative;\r\n}\r\n.margin-r-10 {\r\n    margin-right: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n}\r\n.padding-10 {\r\n    padding: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.f-space-between {\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.frow,\r\n.vendor-dashboard-root {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line .vendor-detail {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-right: 10px;\r\n}\r\n.ellipsis,\r\n.nowrap {\r\n    white-space: nowrap;\r\n}\r\n.StarRating.regular {\r\n    min-width: 50px;\r\n    max-width: 50px;\r\n    height: 25px;\r\n}\r\n.rating-5 {\r\n    background-color: #e72e77;\r\n}\r\n.object-fit-cover {\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n}\r\n.StarRating {\r\n    border-radius: 2px;\r\n    color: #fff;\r\n}\r\n.AboutSection h6,\r\n.regular,\r\n.vendor-dashboard-root .vendor-sidenav-root .active .cnt,\r\n.vendor-dashboard-root .vendor-sidenav-root .cnt,\r\n.VendorLeads .LeadsFilter .DateRangeFilter .DateRangePicker .DateInput_input {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.center,\r\n.Profile .left-section .vendor-head .info-box .action-buttons .grid__col,\r\n.Profile .left-section .vendor-head .profile-pic .profile-actions .action-box,\r\n.VendorRoot .view-all {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line .vendor-detail {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-right: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .vendor-price {\r\n    height: 30px;\r\n}\r\n.frow,\r\n.vendor-dashboard-root {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.PrimaryVendorCard .vendor-card hr {\r\n    border: none;\r\n    border-top: 1px dashed #909090;\r\n    color: #fff;\r\n    background-color: #fff;\r\n    height: 1px;\r\n    width: 100%;\r\n    opacity: .4;\r\n    margin: 0;\r\n}\r\n.margin-10 {\r\n    margin: 10px;\r\n}\r\n.PrimaryVendorCard:hover {\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\r\n}\r\n.text-primary {\r\n    color: #b4245d!important;\r\n}\r\n.margin-r-5 {\r\n    margin-right: 5px;\r\n}\r\n.margin-r-5 {\r\n    margin-right: 5px;\r\n}\r\n.h6,\r\n.vendor-dashboard-root .vendor-sidenav-root {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n.vendor-card a {\r\n    color: #b4245d;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* category */\r\n/* favourite */\r\n.venue-box .venue-box-content .venue-favorite {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorites-button {\r\n    padding-top: 8px;\r\n    white-space: nowrap;\r\n}\r\n.venue-favorite .favorites-button.directory-favorite-unselected {\r\n    background: 0;\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.favorites-button.directory-favorite-unselected .icon-hb-nx-heart-filled,\r\n.favorites-button.directory-favorite-unselected .icon-hb-nx-heart-filled {\r\n    display: none;\r\n}\r\nx.favorites-button .icon-hb-nx-heart-filled,\r\n.favorites-button .icon-hb-nx-heart-filled {\r\n    display: none;\r\n}\r\n.venue-favorite .favorites-button .icon,\r\n.map-venue-box .favorites-button .icon {\r\n    font-size: 14px!important;\r\n    color: #815;\r\n    top: 2px;\r\n    position: relative;\r\n}\r\n.venue-favorite .favorites-button.directory-favorite-unselected .icon-hb-nx-heart,\r\n.map-venue-box .favorites-button.directory-favorite-unselected .icon-hb-nx-heart {\r\n    display: initial;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorite-label {\r\n    font-size: 13px;\r\n    color: #815;\r\n    padding-left: 4px;\r\n}\r\n.hidden {\r\n    display: none!important;\r\n    visibility: hidden!important;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .hint {\r\n    font-size: 13px;\r\n    color: #9b9b9b;\r\n    padding-left: 4px;\r\n    display: inline-block;\r\n}\r\n.venue-favorite .favorites-button .icon,\r\n.map-venue-box .favorites-button .icon {\r\n    font-size: 14px;\r\n    color: #815;\r\n    top: 2px;\r\n    position: relative;\r\n}\r\n[class^=\"icon-hb-\"],\r\n[class*=\" icon-hb-\"] {\r\n    font-family: 'iconbasic'!important;\r\n    /* speak: none; */\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorites-button {\r\n    padding-top: 8px;\r\n    white-space: nowrap;\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.icon-hb-nx-heart:before {\r\n    content: \"\\f004\";\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.rwview-cnt {\r\n    cursor: pointer;\r\n}\r\n.review-cnt:hover {\r\n    color: #b4245d;\r\n    cursor: pointer;\r\n}\r\n.__react_component_tooltip.place-right:before {\r\n    border-top: 6px solid transparent;\r\n    border-bottom: 6px solid transparent;\r\n    left: -8px;\r\n    top: 50%;\r\n    margin-top: -5px;\r\n}\r\n.__react_component_tooltip:before,\r\n.__react_component_tooltip:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n}\r\n.__react_component_tooltip.type-light.place-right:after,\r\n.PrimaryVendorCard .__react_component_tooltip.type-light.place-right:after {\r\n    border-right-color: #fff;\r\n}\r\n.__react_component_tooltip.type-light.place-right:after {\r\n    border-right-color: #fff;\r\n    border-right-style: solid;\r\n    border-right-width: 6px;\r\n}\r\n.__react_component_tooltip.place-right:after {\r\n    border-top: 5px solid transparent;\r\n    border-bottom: 5px solid transparent;\r\n    left: -6px;\r\n    top: 50%;\r\n    margin-top: -4px;\r\n}\r\n.GenieCard .tooltip-info:after,\r\n.PrimaryVendorCard .tooltip-info:after {\r\n    border-top-width: 6px!important;\r\n    border-bottom-width: 6px!important;\r\n}\r\n.__react_component_tooltip:before,\r\n.__react_component_tooltip:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n}\r\n/* favourite */\r\n.vendor-picture .nowrap {\r\n    position: absolute!important;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n/* end */\r\n#changeModal input{\r\n    border:0px !important;\r\n}\r\n#changeModal1 input{\r\n    border:0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL2xlYWRzL2xlYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDBCQUEwQjtBQUMxQjtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsbUNBQW1DO0lBQ25DLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUdBLGlCQUFpQjtBQUVqQjtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBR0E7S0FDSztBQUVMO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsd0NBQXdDO0FBQzVDO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBR0EseUNBQXlDO0FBRXpDO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBR0EsYUFBYTtBQUViO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCO0FBR0EsYUFBYTtBQUViO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBRUE7OztJQUdJLGdCQUFnQjtBQUNwQjtBQUdBLGFBQWE7QUFFYjtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0ksd0VBQXdFO0lBQ3hFLDZFQUE2RTtJQUM3RSxnRkFBZ0Y7QUFDcEY7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBNEI7SUFBNUIsNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUNBQWlDO0lBQWpDLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQkFBb0I7SUFFcEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHNCQUFzQjtJQUV0QixvQkFBYTtJQUFiLGFBQWE7SUFFYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFFSSxtQkFBUztZQUFULFNBQVM7QUFDYjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBRUksb0JBQWE7SUFBYixhQUFhO0lBRWIsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUVJLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFFQTs7SUFHSSxvQkFBYTtJQUFiLGFBQWE7SUFFYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBRUksbUJBQVM7WUFBVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBOzs7OztJQUtJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTs7OztJQUtJLG9CQUFhO0lBQWIsYUFBYTtJQUViLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFFbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjtBQUVBO0lBRUksbUJBQVM7WUFBVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7O0lBR0ksb0JBQWE7SUFBYixhQUFhO0lBRWIsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHdEQUF3RDtBQUM1RDtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDO0FBR0EsYUFBYTtBQUdiLGNBQWM7QUFFZDtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCO0FBRUE7O0lBRUksYUFBYTtBQUNqQjtBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUVBOztJQUVJLGVBQWU7SUFDZixXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMsa0NBQWtDO0FBQ3RDO0FBRUE7SUFHSSxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLFVBQVU7SUFDVixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCO0FBRUE7O0lBRUksK0JBQStCO0lBQy9CLGtDQUFrQztBQUN0QztBQUVBOztJQUVJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUdBLGNBQWM7QUFFZDtJQUNJLDRCQUE0QjtJQUM1QixVQUFVO0lBQ1YsUUFBUTtBQUNaO0FBQ0EsUUFBUTtBQUNSO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvbGVhZHMvbGVhZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBuZXcgc2VhcmNoIHBhZ2luYXRpb24gKi9cclxuLmZhLWNoZWNrLWNpcmNsZSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mYS10aW1lcy1jaXJjbGUge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm15LWZyZWFreS10b29sdGlwIC5hcnJvdzo6YmVmb3JlIHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6ICMzNDk4ZGIhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1mcmVha3ktdG9vbHRpcCAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktZnJlYWt5LXRvb2x0aXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYiFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBmb250LXNpemU6IDEyNSU7XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0NDMzNiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXplcm8ge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hcmdpbi16ZXJvIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qIHNpbWlsYXIgaG9tZSAqL1xyXG5cclxuLnNlY29uZF9zZWN0aW9uIHtcclxuICAgIGhlaWdodDogMjUwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxNTAsIDE4MSwgMC4wNDgpO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8qIC5mU2Vje1xyXG4gIH0gKi9cclxuXHJcbi52ZXJ0aWNhbF9jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmNvbC1tZC0zIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uc2Vjb25kX3NlY3Rpb24+aW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMik7XHJcbiAgICAvKiBmaWx0ZXI6IGJsdXIoMTBweCkgYnJpZ2h0bmVzcyg1MCUpOyAqL1xyXG59XHJcblxyXG4uc2Vjb25kX3NlY3Rpb24gKiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zZWNvbmRfc2VjdGlvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogNTJweDtcclxufVxyXG5cclxuLmZvb3Rlcl91cmwge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcblxyXG4uZm9vdGVyX3VybD5wIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZvb3Rlcl9sYXN0Pi5jb2wtbWQtMiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyX2xhc3Qge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFsLWljb25zIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvbWUtcGFnZS1hc3N1cmVkLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDcycHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3MnB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi8qIEludHJvZHVjaW5nIFNTIEFzc3VyZWQgVmVuZG9yIEJhZGdlICAqL1xyXG5cclxuLmhvbWUtcGFnZS1hc3N1cmVkLWNvbnRlbnQtb3B0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIC8qIG1hcmdpbjogMHB4OyAqL1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMCAwIDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBsYXRvIGxpZ2h0O1xyXG59XHJcblxyXG4uaG9tZS1wYWdlLWFzc3VyZWQtY29udGVudCBpIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3MnB4O1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnZuZHItaG0tY3Qge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi52ZW5kb3ItaG9tZS1wYWdlLWNhdGVnb3J5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlLWhvbWUtcGFnZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlZS1hbGwtbGlzdCB7XHJcbiAgICBjb2xvcjogI2ZhNGE2ZjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY29sb3ItcGluayB7XHJcbiAgICBjb2xvcjogI2ZhNGE2ZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib29rX2FfdmVuZG9yIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI2dmghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogc2VsZWN0b3IgKi9cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19fb3B0aW9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLS1zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLnNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW06aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19fbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW0tLXNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW0uc2VsZWN0ZWQsXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbTpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwudmVuZG9yc0ZpbHRlcnNfX29wdGlvbnMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIHNlbGVjdG9yICovXHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX3NlY3Rpb24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVycyAudG9nZ2xlQWN0aXZlIC52ZW5kb3JzRmlsdGVyc19fdG9nZ2xlVXAge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX3RvZ2dsZVVwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN2Z0ljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX190b2dnbGVVcCBzdmcge1xyXG4gICAgZmlsbDogIzhjOGM4YztcclxufVxyXG5cclxuLnN2Z0ljb24gc3ZnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5zdmc6bm90KDpyb290KSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX29wdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLS1zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLnNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW06aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19fbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW0tLXNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW0uc2VsZWN0ZWQsXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbTpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLyogY2F0ZWdvcnkgKi9cclxuXHJcbi5qZ3VoSGYge1xyXG4gICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92YSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnNoYWRvd19vbmUge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMDUpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNSkgMCAxcHggNXB4IDAsIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjA1KSAwIDFweCA1cHggMCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxufVxyXG5cclxuLndGbnFEIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5wbGFjZS10b3Age1xyXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnR5cGUtZGFyayB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnBsYWNlLXJpZ2h0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWxpZ2h0IHtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRvb2x0aXAtaW5mbyxcclxuLlByaW1hcnlWZW5kb3JDYXJkIC50b29sdGlwLWluZm8ge1xyXG4gICAgcGFkZGluZzogNXB4IWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxlZnQ6IC05OTllbTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMjFweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xyXG4gICAgdG9wOiAtOTk5ZW07XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5hcHAtdG9nZ2xlLWJveCBpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwNlwiO1xyXG59XHJcblxyXG4uYXBwLXRvZ2dsZS1ib3guY29sbGFwc2VkIGk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnNob3cge1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggMCAjOTA5MDkwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwICM5MDkwOTA7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnNob3cge1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5QcmltYXJ5VmVuZG9yQ2FyZCAudmVuZG9yLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIC52ZW5kb3ItcGljdHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWFyZ2luLXItMTAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIC52ZW5kb3ItaW5mbyB7XHJcbiAgICAtbXMtZmxleDogMSAxO1xyXG4gICAgZmxleDogMSAxO1xyXG59XHJcblxyXG4ucGFkZGluZy0xMCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIC52ZW5kb3ItaW5mbyAubGluZSB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5mLXNwYWNlLWJldHdlZW4ge1xyXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZyb3csXHJcbi52ZW5kb3ItZGFzaGJvYXJkLXJvb3Qge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIC52ZW5kb3ItaW5mbyAubGluZSAudmVuZG9yLWRldGFpbCB7XHJcbiAgICAtbXMtZmxleDogMSAxO1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmVsbGlwc2lzLFxyXG4ubm93cmFwIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5TdGFyUmF0aW5nLnJlZ3VsYXIge1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ucmF0aW5nLTUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3MmU3NztcclxufVxyXG5cclxuLm9iamVjdC1maXQtY292ZXIge1xyXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLlN0YXJSYXRpbmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5BYm91dFNlY3Rpb24gaDYsXHJcbi5yZWd1bGFyLFxyXG4udmVuZG9yLWRhc2hib2FyZC1yb290IC52ZW5kb3Itc2lkZW5hdi1yb290IC5hY3RpdmUgLmNudCxcclxuLnZlbmRvci1kYXNoYm9hcmQtcm9vdCAudmVuZG9yLXNpZGVuYXYtcm9vdCAuY250LFxyXG4uVmVuZG9yTGVhZHMgLkxlYWRzRmlsdGVyIC5EYXRlUmFuZ2VGaWx0ZXIgLkRhdGVSYW5nZVBpY2tlciAuRGF0ZUlucHV0X2lucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5jZW50ZXIsXHJcbi5Qcm9maWxlIC5sZWZ0LXNlY3Rpb24gLnZlbmRvci1oZWFkIC5pbmZvLWJveCAuYWN0aW9uLWJ1dHRvbnMgLmdyaWRfX2NvbCxcclxuLlByb2ZpbGUgLmxlZnQtc2VjdGlvbiAudmVuZG9yLWhlYWQgLnByb2ZpbGUtcGljIC5wcm9maWxlLWFjdGlvbnMgLmFjdGlvbi1ib3gsXHJcbi5WZW5kb3JSb290IC52aWV3LWFsbCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIC52ZW5kb3ItaW5mbyAubGluZSAudmVuZG9yLWRldGFpbCB7XHJcbiAgICAtbXMtZmxleDogMSAxO1xyXG4gICAgZmxleDogMSAxO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLWluZm8gLnZlbmRvci1wcmljZSB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mcm93LFxyXG4udmVuZG9yLWRhc2hib2FyZC1yb290IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCBociB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICM5MDkwOTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3BhY2l0eTogLjQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYXJnaW4tMTAge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNiNDI0NWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLXItNSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1hcmdpbi1yLTUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5oNixcclxuLnZlbmRvci1kYXNoYm9hcmQtcm9vdCAudmVuZG9yLXNpZGVuYXYtcm9vdCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4udmVuZG9yLWNhcmQgYSB7XHJcbiAgICBjb2xvcjogI2I0MjQ1ZDtcclxufVxyXG5cclxuLmZhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG5cclxuLyogY2F0ZWdvcnkgKi9cclxuXHJcblxyXG4vKiBmYXZvdXJpdGUgKi9cclxuXHJcbi52ZW51ZS1ib3ggLnZlbnVlLWJveC1jb250ZW50IC52ZW51ZS1mYXZvcml0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi52ZW51ZS1ib3ggLnZlbnVlLWJveC1jb250ZW50IC52ZW51ZS1mYXZvcml0ZSAuZmF2b3JpdGVzLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZXMtYnV0dG9uLmRpcmVjdG9yeS1mYXZvcml0ZS11bnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQ6IDA7XHJcbn1cclxuXHJcbi5mYXZvcml0ZXMtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmF2b3JpdGVzLWJ1dHRvbi5kaXJlY3RvcnktZmF2b3JpdGUtdW5zZWxlY3RlZCAuaWNvbi1oYi1ueC1oZWFydC1maWxsZWQsXHJcbi5mYXZvcml0ZXMtYnV0dG9uLmRpcmVjdG9yeS1mYXZvcml0ZS11bnNlbGVjdGVkIC5pY29uLWhiLW54LWhlYXJ0LWZpbGxlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG54LmZhdm9yaXRlcy1idXR0b24gLmljb24taGItbngtaGVhcnQtZmlsbGVkLFxyXG4uZmF2b3JpdGVzLWJ1dHRvbiAuaWNvbi1oYi1ueC1oZWFydC1maWxsZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZXMtYnV0dG9uIC5pY29uLFxyXG4ubWFwLXZlbnVlLWJveCAuZmF2b3JpdGVzLWJ1dHRvbiAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHghaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM4MTU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZXMtYnV0dG9uLmRpcmVjdG9yeS1mYXZvcml0ZS11bnNlbGVjdGVkIC5pY29uLWhiLW54LWhlYXJ0LFxyXG4ubWFwLXZlbnVlLWJveCAuZmF2b3JpdGVzLWJ1dHRvbi5kaXJlY3RvcnktZmF2b3JpdGUtdW5zZWxlY3RlZCAuaWNvbi1oYi1ueC1oZWFydCB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG59XHJcblxyXG4udmVudWUtYm94IC52ZW51ZS1ib3gtY29udGVudCAudmVudWUtZmF2b3JpdGUgLmZhdm9yaXRlLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjODE1O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4haW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVudWUtYm94IC52ZW51ZS1ib3gtY29udGVudCAudmVudWUtZmF2b3JpdGUgLmhpbnQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM5YjliOWI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZXMtYnV0dG9uIC5pY29uLFxyXG4ubWFwLXZlbnVlLWJveCAuZmF2b3JpdGVzLWJ1dHRvbiAuaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzgxNTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5bY2xhc3NePVwiaWNvbi1oYi1cIl0sXHJcbltjbGFzcyo9XCIgaWNvbi1oYi1cIl0ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdpY29uYmFzaWMnIWltcG9ydGFudDtcclxuICAgIC8qIHNwZWFrOiBub25lOyAqL1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuKiB7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udmVudWUtYm94IC52ZW51ZS1ib3gtY29udGVudCAudmVudWUtZmF2b3JpdGUgLmZhdm9yaXRlcy1idXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5mYXZvcml0ZXMtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbi1oYi1ueC1oZWFydDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYwMDRcIjtcclxufVxyXG5cclxuLmZhdm9yaXRlcy1idXR0b24ge1xyXG4gICAgd2lkdGg6IDE3cHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yd3ZpZXctY250IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJldmlldy1jbnQ6aG92ZXIge1xyXG4gICAgY29sb3I6ICNiNDI0NWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnBsYWNlLXJpZ2h0OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBsZWZ0OiAtOHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcDpiZWZvcmUsXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAudHlwZS1saWdodC5wbGFjZS1yaWdodDphZnRlcixcclxuLlByaW1hcnlWZW5kb3JDYXJkIC5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnR5cGUtbGlnaHQucGxhY2UtcmlnaHQ6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWxpZ2h0LnBsYWNlLXJpZ2h0OmFmdGVyIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDZweDtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAucGxhY2UtcmlnaHQ6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogLTZweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLkdlbmllQ2FyZCAudG9vbHRpcC1pbmZvOmFmdGVyLFxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnRvb2x0aXAtaW5mbzphZnRlciB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiA2cHghaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXA6YmVmb3JlLFxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcblxyXG4vKiBmYXZvdXJpdGUgKi9cclxuXHJcbi52ZW5kb3ItcGljdHVyZSAubm93cmFwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbn1cclxuLyogZW5kICovXHJcbiNjaGFuZ2VNb2RhbCBpbnB1dHtcclxuICAgIGJvcmRlcjowcHggIWltcG9ydGFudDtcclxufVxyXG4jY2hhbmdlTW9kYWwxIGlucHV0e1xyXG4gICAgYm9yZGVyOjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/vendor/leads/leads.component.ts":
/*!*************************************************!*\
  !*** ./src/app/vendor/leads/leads.component.ts ***!
  \*************************************************/
/*! exports provided: LeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsComponent", function() { return LeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeadsComponent = /** @class */ (function () {
    function LeadsComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.searchResult = [];
        this.searchResult1 = [];
        this.searchResult2 = [];
        this.infoHover = [];
        this.infoHover1 = [];
        this.infoHover2 = [];
        // this.tArray = new Array();
        // this.tArray1 = new Array();
        // this.tArray2 = new Array();
        var obj = JSON.parse(localStorage.getItem('current_vendor'));
        if (obj && obj['_id']) {
            this.auth.getCities().subscribe(function (res) {
                _this.cities = res;
                _this.auth.getRequests(obj['_id']).subscribe(function (res) {
                    console.log('>>  get Review << ');
                    console.log(res);
                    res.forEach(function (sub) {
                        // var temp = new Array();
                        // temp.push(sub['fullName']);
                        // temp.push(sub['clientEmail']);
                        // temp.push(sub['phoneNumber']);
                        // temp.push(sub['eventDate']);
                        // temp.push(this.cities[sub['eventCity']].name);
                        // temp.push(sub['maxBudget']);
                        // temp.push(sub['serviceInfo']);
                        // temp.push(sub['additionalContent']);
                        // temp.push(sub['reqStatus']);
                        _this.searchResult.push(sub);
                        if (sub['reqStatus'] != 'allow')
                            _this.searchResult1.push(sub);
                        if (sub['reqStatus'] == 'allow')
                            _this.searchResult2.push(sub);
                    });
                    //     this.dataTable = {
                    //       headerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content', "Status","Actions" ],
                    //       footerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content', "Status",'Actions' ],
                    //       dataRows: this.tArray
                    //   };
                    //   this.dataTable1 = {
                    //     headerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content'],
                    //     footerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content'],
                    //     dataRows: this.tArray1
                    //   };
                    //   this.dataTable2 = {
                    //     headerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content'],
                    //     footerRow: [ 'Name','Email', 'Phone', 'Date', 'City', 'MaxBudget', 'Service','Additional Content'],
                    //     dataRows: this.tArray2
                    // };
                }, function (err) {
                    console.log(err);
                });
            });
        }
    }
    LeadsComponent.prototype.ngOnInit = function () {
    };
    // ngAfterViewInit() {
    // $('#datatables').DataTable({
    //   "pagingType": "full_numbers",
    //   "lengthMenu": [
    //     [10, 25, 50, -1],
    //     [10, 25, 50, "All"]
    //   ],
    //   responsive: true,
    //   language: {
    //     search: "_INPUT_",
    //     searchPlaceholder: "Search records",
    //   }
    // });
    // $('#datatables1').DataTable({
    //   "pagingType": "full_numbers",
    //   "lengthMenu": [
    //     [10, 25, 50, -1],
    //     [10, 25, 50, "All"]
    //   ],
    //   responsive: true,
    //   language: {
    //     search: "_INPUT_",
    //     searchPlaceholder: "Search records",
    //   }
    // });
    // $('#datatables2').DataTable({
    //   "pagingType": "full_numbers",
    //   "lengthMenu": [
    //     [10, 25, 50, -1],
    //     [10, 25, 50, "All"]
    //   ],
    //   responsive: true,
    //   language: {
    //     search: "_INPUT_",
    //     searchPlaceholder: "Search records",
    //   }
    // });
    // const table = $('#datatables').DataTable();
    // table.on('click', '.remove', function(e) {
    //   const $tr = $(this).closest('tr');
    //   table.row($tr).remove().draw();
    //   e.preventDefault();
    // });
    // table.on('click', '.like', function(e) {
    //   const $tr = $(this).closest('tr');
    //   var data = table.row($tr).data();
    //   if(data[8].includes('ending'))
    //     table.cell($tr,8).data(`<span style="padding: 7px;border-radius: 5px;background-color: green; color:white">Allow</span>`);
    //   e.preventDefault();
    // });
    // table.on('click', '.later', function(e) {
    //   const $tr = $(this).closest('tr');
    //   var data = table.row($tr).data();
    //   if(data[8].includes('llow'))
    //     table.cell($tr,8).data(`<span style="padding: 7px;border-radius: 5px;background-color: red; color:white">Pending</span>`);
    //   e.preventDefault();
    //   });
    // $('.card .material-datatables label').addClass('form-group');
    // }
    // allowFunc(email,staus,date, index){
    //   console.log('======== allow ===========')
    //   console.log(staus)
    //   console.log(email)
    //   if(index == 1)
    //     this.auth.showNotification('top','right', 2, 'This client have just allowed.');
    //   else
    //   this.auth.showNotification('top','right', 3, 'This client has just  pended.');
    //   this.auth.setStatusLeadsVendor(email, date).subscribe((res)=>{
    //     console.log('=========setStatus==============')
    //     console.log(res)
    //     console.log('=========setStatus==============')
    //   })
    //   console.log('======== allow ===========')
    // }
    // delFunc(email,date){
    //   this.auth.delLeadsVendor(email,date).subscribe((res)=>{
    //     this.auth.showNotification('top','right', 4, 'This vendor has just  removed.');
    //     console.log(res)
    //   })
    // }
    LeadsComponent.prototype.onChangePage = function (pageOfItems) {
        this.pageOfItems = pageOfItems;
    };
    LeadsComponent.prototype.onChangePage1 = function (pageOfItems1) {
        this.pageOfItems1 = pageOfItems1;
    };
    LeadsComponent.prototype.onChangePage2 = function (pageOfItems2) {
        this.pageOfItems2 = pageOfItems2;
    };
    // changeEnquiry(_id, budget, city, content,date){
    //   this.tempBudget = budget;
    //   this.tempCity = city;
    //   this.tempContent = content;
    //   this.tempDate = date;
    //   this.tempId = _id;
    //   if(this.tempCity)
    //   this.get_event_city.setValue(this.tempCity)
    //  if(this.tempBudget)
    //    this.get_max_budget.setValue(this.tempBudget)
    //  if(this.tempCity)
    //    this.get_additional_content.setValue(this.tempContent)
    //  if(this.tempDate)
    //    this.get_event_date.setValue(this.tempDate)
    // console.log(this.get_event_city.value);
    // console.log(this.get_max_budget.value)
    // console.log(this.get_additional_content.value)
    // console.log(this.get_event_date.value)
    // }
    LeadsComponent.prototype.pendingFunc = function (_id, date, email) {
        var _this = this;
        console.log(' ========== pendingFunc func ========');
        console.log(_id);
        console.log(' ========== pendingFunc func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        var temp;
        this.searchResult.forEach(function (x) {
            if (x._id == _id) {
                x.reqStatus = 'false';
            }
        });
        this.pageOfItems.forEach(function (x) {
            if (x._id == _id)
                x.reqStatus = 'false';
        });
        this.searchResult2.forEach(function (elements, index) {
            if (elements._id == _id) {
                indSearch1 = index;
                temp = elements;
            }
        });
        this.pageOfItems2.forEach(function (elements, index) {
            if (elements._id == _id)
                indPage1 = index;
        });
        this.searchResult2.splice(indSearch1, 1);
        this.pageOfItems2.splice(indPage1, 1);
        this.searchResult1.push(temp);
        this.auth.setStatusLeadsVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 4, 'You have just Pended  successfully');
            console.log(res);
        });
    };
    LeadsComponent.prototype.acceptFunc = function (_id, date, email) {
        var _this = this;
        console.log(' ========== acceptFunc func ========');
        console.log(_id);
        console.log(' ========== acceptFunc func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        var temp;
        this.searchResult.forEach(function (x) {
            if (x._id == _id) {
                x.reqStatus = 'allow';
            }
        });
        this.pageOfItems.forEach(function (x) {
            if (x._id == _id)
                x.reqStatus = 'allow';
        });
        this.searchResult1.forEach(function (elements, index) {
            if (elements._id == _id) {
                indSearch1 = index;
                temp = elements;
            }
        });
        this.pageOfItems1.forEach(function (elements, index) {
            if (elements._id == _id)
                indPage1 = index;
        });
        this.searchResult1.splice(indSearch1, 1);
        this.pageOfItems1.splice(indPage1, 1);
        this.searchResult2.push(temp);
        this.auth.setStatusLeadsVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 2, 'You have just Acceted  successfully');
            console.log(res);
        });
    };
    LeadsComponent.prototype.cancelFunc = function (date, email, flag) {
        var _this = this;
        console.log(' ========== close func ========');
        console.log(date);
        console.log(' ========== close func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        this.searchResult.forEach(function (elements, index) {
            if (elements.eventDate == date)
                indSearch = index;
        });
        this.pageOfItems.forEach(function (elements, index) {
            if (elements.eventDate == date)
                indPage = index;
        });
        this.searchResult.splice(indSearch, 1);
        this.pageOfItems.splice(indPage, 1);
        if (flag != 'allow') {
            this.searchResult1.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indSearch1 = index;
            });
            this.pageOfItems1.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indPage1 = index;
            });
            this.searchResult1.splice(indSearch1, 1);
            this.pageOfItems1.splice(indPage1, 1);
        }
        else {
            this.searchResult2.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indSearch1 = index;
            });
            this.pageOfItems2.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indPage1 = index;
            });
            this.searchResult2.splice(indSearch1, 1);
            this.pageOfItems2.splice(indPage1, 1);
        }
        //  var obj = JSON.parse(localStorage.getItem('current_client'));
        this.auth.delLeadsVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 4, 'You have just calcened successfully');
            console.log(res);
        });
    };
    LeadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leads',
            template: __webpack_require__(/*! raw-loader!./leads.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/leads/leads.component.html"),
            styles: [__webpack_require__(/*! ./leads.component.css */ "./src/app/vendor/leads/leads.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthWedService"]])
    ], LeadsComponent);
    return LeadsComponent;
}());



/***/ }),

/***/ "./src/app/vendor/membershipplan/membershipplan.component.css":
/*!********************************************************************!*\
  !*** ./src/app/vendor/membershipplan/membershipplan.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @media (min-width: 992px){\r\n    .cards{\r\n        height: 60vh;\r\n    }\r\n} */\r\n\r\n.row {\r\n    overflow: hidden;\r\n}\r\n\r\n[class*=\"col-\"] {\r\n    margin-bottom: -99999px;\r\n    padding-bottom: 99999px;\r\n}\r\n\r\n.checkout-container {\r\n    background: #2c2c4b;\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    padding: 7rem 0 0 0;\r\n}\r\n\r\nh1 {\r\n    margin-top: 1rem;\r\n}\r\n\r\n#checkout-form.row {\r\n    padding: 0;\r\n}\r\n\r\n.row.top {\r\n    width: 100%;\r\n    margin: 0;\r\n    padding-top: 7rem;\r\n}\r\n\r\n.row.dates {\r\n    width: 100%;\r\n    padding: 0;\r\n}\r\n\r\n.row.dates.form-group {\r\n    padding: 0;\r\n}\r\n\r\n.columnDiv {\r\n    background: #EEE;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#checkout-form {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 1rem;\r\n}\r\n\r\ninput {\r\n    border: 1px solid #000;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .btn-success {\r\n        width: 100%;\r\n        margin: 2rem 0;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .columnDiv {\r\n        width: 60%;\r\n    }\r\n    #checkout-form {\r\n        width: 75%;\r\n        margin: 0 auto;\r\n        padding: .5rem 2rem;\r\n    }\r\n    .btn-success {\r\n        margin: 2rem auto;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\nform {\r\n    padding-top: 10rem;\r\n}\r\n\r\nform.checkout {\r\n    max-width: 500px;\r\n    margin: 2rem auto;\r\n    text-align: center;\r\n    border: 2px solid #000;\r\n    border-radius: 8px;\r\n    padding: 1rem 2rem;\r\n    background: white;\r\n    font-family: monospace;\r\n    color: #525252;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n#card-info,\r\n#card-element {\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: 2px solid #000;\r\n}\r\n\r\nform.checkout button {\r\n    padding: 0.5rem 1rem;\r\n    color: white;\r\n    background: coral;\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin-top: 1rem;\r\n}\r\n\r\nform.checkout button:active {\r\n    background: rgb(165, 76, 43);\r\n}\r\n\r\n.StripeElement {\r\n    margin: 1rem 0 1rem;\r\n    background-color: white;\r\n    padding: 8px 12px;\r\n    border-radius: 4px;\r\n    border: 1px solid transparent;\r\n    box-shadow: 0 1px 3px 0 #e6ebf1;\r\n    -webkit-transition: box-shadow 150ms ease;\r\n    transition: box-shadow 150ms ease;\r\n}\r\n\r\n.StripeElement--focus {\r\n    box-shadow: 0 1px 3px 0 #cfd7df;\r\n}\r\n\r\n.StripeElement--invalid {\r\n    border-color: #fa755a;\r\n}\r\n\r\n.StripeElement--webkit-autofill {\r\n    background-color: #fefde5 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL21lbWJlcnNoaXBwbGFuL21lbWJlcnNoaXBwbGFuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRzs7QUFFSDtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC92ZW5kb3IvbWVtYmVyc2hpcHBsYW4vbWVtYmVyc2hpcHBsYW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAuY2FyZHN7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4ucm93IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC05OTk5OXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDk5OTk5cHg7XHJcbn1cclxuXHJcbi5jaGVja291dC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJjMmM0YjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA3cmVtIDAgMCAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4jY2hlY2tvdXQtZm9ybS5yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnJvdy50b3Age1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogN3JlbTtcclxufVxyXG5cclxuLnJvdy5kYXRlcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5yb3cuZGF0ZXMuZm9ybS1ncm91cCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29sdW1uRGl2IHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jY2hlY2tvdXQtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNvbHVtbkRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgICNjaGVja291dC1mb3JtIHtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XHJcbiAgICB9XHJcbiAgICAuYnRuLXN1Y2Nlc3Mge1xyXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG59XHJcblxyXG5mb3JtLmNoZWNrb3V0IHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogIzUyNTI1MjtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4jY2FyZC1pbmZvLFxyXG4jY2FyZC1lbGVtZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbmZvcm0uY2hlY2tvdXQgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogY29yYWw7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG5mb3JtLmNoZWNrb3V0IGJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE2NSwgNzYsIDQzKTtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQge1xyXG4gICAgbWFyZ2luOiAxcmVtIDAgMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XHJcbn1cclxuXHJcbi5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcclxufVxyXG5cclxuLlN0cmlwZUVsZW1lbnQtLXdlYmtpdC1hdXRvZmlsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZGU1ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/membershipplan/membershipplan.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vendor/membershipplan/membershipplan.component.ts ***!
  \*******************************************************************/
/*! exports provided: MembershipplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipplanComponent", function() { return MembershipplanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MembershipplanComponent = /** @class */ (function () {
    function MembershipplanComponent(router, auth, cd) {
        this.router = router;
        this.auth = auth;
        this.cd = cd;
        this.cardHandler = this.onChange.bind(this);
        this.savedProduct = {
            imagePath: '',
            title: '',
            description: '',
            price: ''
        };
        this.selectedProduct = {};
        this.productStore = [];
        this.cartItems = [];
        this.priceTotal = 0;
        this.checkoutInfo = [];
        this.currentObj = JSON.parse(localStorage.getItem('current_vendor'));
        console.log(this.currentObj);
    }
    MembershipplanComponent.prototype.ngAfterViewInit = function () {
        var style = {
            base: {
                lineHeight: '24px',
                fontFamily: 'monospace',
                fontSmoothing: 'antialiased',
                fontSize: '19px',
                '::placeholder': {
                    color: 'purple'
                }
            }
        };
        if (elements) {
            this.card = elements.create('card');
            this.card.mount(this.cardInfo.nativeElement);
            this.card.addEventListener('change', this.cardHandler);
        }
        // this.getCartItems();
    };
    MembershipplanComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    };
    MembershipplanComponent.prototype.onSubmit = function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var name, address, additionalData, _a, token, error;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        name = document.getElementById('name').value;
                        address = document.getElementById('address').value;
                        additionalData = {
                            name: name ? name : undefined,
                            address: address ? address : undefined
                        };
                        return [4 /*yield*/, stripe.createToken(this.card, additionalData)];
                    case 1:
                        _a = _b.sent(), token = _a.token, error = _a.error;
                        if (error) {
                            console.log('Something is wrong:', error);
                        }
                        else {
                            console.log('Success!', token);
                            // ...send the token to the your backend to process the charge
                            this.checkoutInfo = [this.priceTotal, name, address, token, '', this.vendor_id];
                            console.log('Checkout Array!', this.checkoutInfo);
                            // Calling addVideo from savedMediaService and passing it my videoStore array.
                            this.auth.makePurchase(this.checkoutInfo).subscribe(function (res) {
                                _this.auth.showNotification('top', 'right', 2, 'The payment have done successfully.');
                                // this.productStore.push(res);
                                // this.checkoutInfo = res;
                                console.log(' ============ make purchase ============');
                                if (_this.priceTotal == 2100)
                                    _this.auth.setMembership(1, _this.vendor_id).subscribe(function (res) {
                                        console.log('sememberhip response');
                                        console.log(res);
                                        localStorage.setItem('current_vendor', JSON.stringify(res));
                                        _this.currentObj = res;
                                    });
                                else
                                    _this.auth.setMembership(2, _this.vendor_id).subscribe(function (res) {
                                        console.log('sememberhip response');
                                        console.log(res);
                                        localStorage.setItem('current_vendor', JSON.stringify(res));
                                        _this.currentObj = res;
                                    });
                            });
                        }
                        $('#myLoginModal').modal('toggle');
                        this.router.navigate(['/success-page']);
                        return [2 /*return*/];
                }
            });
        });
    };
    MembershipplanComponent.prototype.getTotal = function (num) {
        this.priceTotal = num;
        this.vendor_id = this.currentObj['_id'];
    };
    MembershipplanComponent.prototype.ngOnDestroy = function () {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cardInfo', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MembershipplanComponent.prototype, "cardInfo", void 0);
    MembershipplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membershipplan',
            template: __webpack_require__(/*! raw-loader!./membershipplan.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/membershipplan/membershipplan.component.html"),
            styles: [__webpack_require__(/*! ./membershipplan.component.css */ "./src/app/vendor/membershipplan/membershipplan.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthWedService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MembershipplanComponent);
    return MembershipplanComponent;
}());



/***/ }),

/***/ "./src/app/vendor/mybusiness/mybusiness.component.css":
/*!************************************************************!*\
  !*** ./src/app/vendor/mybusiness/mybusiness.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9teWJ1c2luZXNzL215YnVzaW5lc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/vendor/mybusiness/mybusiness.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor/mybusiness/mybusiness.component.ts ***!
  \***********************************************************/
/*! exports provided: MybusinessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MybusinessComponent", function() { return MybusinessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MybusinessComponent = /** @class */ (function () {
    function MybusinessComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.tArray = new Array();
        var obj = JSON.parse(localStorage.getItem('current_vendor'));
        if (obj && obj['_id']) {
            this.auth.getPayment(obj['_id']).subscribe(function (res) {
                res.forEach(function (sub) {
                    var temp = [];
                    // temp.push(sub.vendorId.brandname);
                    temp.push(sub.date);
                    if (sub.fromTo == 0) {
                        // temp.push(sub['clientId']['fullname']);
                        temp.push(sub['clientId']['email']);
                    }
                    else {
                        // temp.push('Admin')
                        temp.push('Admin');
                    }
                    temp.push(sub.amount);
                    temp.push(sub.content);
                    temp.push(sub.fromTo);
                    // temp.push(sub.status);
                    _this.tArray.push(temp);
                });
                _this.dataTable = {
                    headerRow: ['Date', 'From Name', 'Amount', 'Content'],
                    footerRow: ['Date', 'From Name', 'Amount', 'Content'],
                    dataRows: _this.tArray
                };
            }, function (err) {
                console.log(err);
            });
        }
    }
    MybusinessComponent.prototype.ngOnInit = function () {
    };
    MybusinessComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        // table.on('click', '.edit', function(e) {
        //   let $tr = $(this).closest('tr');
        //   if ($($tr).hasClass('child')) {
        //     $tr = $tr.prev('.parent');
        //   }
        //   var data = table.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // // Delete a record
        // table.on('click', '.remove', function(e) {
        //   const $tr = $(this).closest('tr');
        //   table.row($tr).remove().draw();
        //   e.preventDefault();
        // });
        // //Like record
        // table.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        $('.card .material-datatables label').addClass('form-group');
    };
    MybusinessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mybusiness',
            template: __webpack_require__(/*! raw-loader!./mybusiness.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/mybusiness/mybusiness.component.html"),
            styles: [__webpack_require__(/*! ./mybusiness.component.css */ "./src/app/vendor/mybusiness/mybusiness.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthWedService"]])
    ], MybusinessComponent);
    return MybusinessComponent;
}());



/***/ }),

/***/ "./src/app/vendor/myrequest/myrequest.component.css":
/*!**********************************************************!*\
  !*** ./src/app/vendor/myrequest/myrequest.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* new search pagination */\r\n.fa-check-circle {\r\n    color: green;\r\n}\r\n.fa-times-circle {\r\n    color: red;\r\n}\r\n.my-freaky-tooltip .arrow::before {\r\n    border-top-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-freaky-tooltip .tooltip-inner {\r\n    background-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-freaky-tooltip {\r\n    background-color: #3498db!important;\r\n    opacity: 1!important;\r\n}\r\n.my-custom-class .tooltip-inner {\r\n    background-color: darkgreen;\r\n    font-size: 125%;\r\n    opacity: 1!important;\r\n}\r\n.my-custom-class .arrow::before {\r\n    border-top-color: darkgreen;\r\n    opacity: 1!important;\r\n}\r\n.page-item.active .page-link {\r\n    z-index: 1;\r\n    color: #ffffff!important;\r\n    background-color: #f44336!important;\r\n    border-color: #f44336!important;\r\n}\r\n.page-item.active .page-link {\r\n    z-index: 1;\r\n    color: #fff!important;\r\n    background-color: #f44336!important;\r\n    border-color: #f44336!important;\r\n}\r\n.padding-zero {\r\n    padding: 0;\r\n}\r\n.margin-zero {\r\n    margin: 0;\r\n}\r\n/* similar home */\r\n.second_section {\r\n    height: 250px!important;\r\n}\r\nsection {\r\n    background-color: rgba(253, 150, 181, 0.048);\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\nimg {\r\n    border-radius: 10%;\r\n}\r\n.first {\r\n    background-color: white;\r\n}\r\n/* .fSec{\r\n  } */\r\n.vertical_center {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.col-md-3 {\r\n    padding-bottom: 40px;\r\n}\r\n.second_section>img {\r\n    position: absolute;\r\n    border-radius: 0%;\r\n    border: 0;\r\n    width: 100%;\r\n    height: 250px;\r\n    -webkit-filter: brightness(0.2);\r\n            filter: brightness(0.2);\r\n    /* filter: blur(10px) brightness(50%); */\r\n}\r\n.second_section * {\r\n    color: white;\r\n}\r\n.second_section i {\r\n    font-size: 52px;\r\n}\r\n.footer_url {\r\n    font-size: smaller;\r\n}\r\n.footer_url>p {\r\n    margin-bottom: 3px;\r\n}\r\n.footer-social-icons {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.footer_last>.col-md-2 {\r\n    padding-bottom: 5px;\r\n}\r\n.footer_last {\r\n    padding-bottom: 30px;\r\n}\r\n.footer-social-icons img {\r\n    width: 100%;\r\n}\r\n.home-page-assured-content {\r\n    width: 72px!important;\r\n    height: 72px!important;\r\n    color: #999;\r\n    background: #f4f4f4;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n/* Introducing SS Assured Vendor Badge  */\r\n.home-page-assured-content-option {\r\n    font-size: 12px;\r\n    /* margin: 0px; */\r\n    color: #666;\r\n    margin-left: -20px;\r\n    padding: 0px 0 0 0px;\r\n    font-family: lato light;\r\n}\r\n.home-page-assured-content i {\r\n    font-size: 30px;\r\n    line-height: 72px;\r\n    float: none;\r\n    color: #999;\r\n    margin: 0;\r\n}\r\n.vndr-hm-ct {\r\n    color: #000;\r\n}\r\n.vendor-home-page-category {\r\n    margin-bottom: 20px;\r\n    font-size: 30px;\r\n}\r\n.section-title-home-page {\r\n    font-size: 32px;\r\n    color: #000;\r\n    margin: 0;\r\n    font-weight: 700;\r\n    line-height: normal;\r\n    padding-bottom: 5px;\r\n}\r\n.see-all-list {\r\n    color: #fa4a6f;\r\n    line-height: 54px;\r\n    font-size: 16px;\r\n}\r\n.color-pink {\r\n    color: #fa4a6f!important;\r\n}\r\n.book_a_vendor {\r\n    min-height: 26vh!important;\r\n}\r\n/* selector */\r\n.vendorsFilters__options {\r\n    margin-top: 20px!important;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__label {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 80%;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\nul.vendorsFilters__options {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n/* selector */\r\n.vendorsFilters__section {\r\n    border-bottom: 1px solid #d9d9d9;\r\n    padding-bottom: 15px;\r\n    margin-bottom: 25px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__title {\r\n    font-size: 18px;\r\n    line-height: 28px;\r\n}\r\n.vendorsFilters .toggleActive .vendorsFilters__toggleUp {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n}\r\n.vendorsFilters__toggleUp {\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    cursor: pointer;\r\n}\r\n.svgIcon {\r\n    width: 16px;\r\n    height: 16px;\r\n    display: inline-block;\r\n    line-height: 0;\r\n}\r\n.vendorsFilters__toggleUp svg {\r\n    fill: #8c8c8c;\r\n}\r\n.svgIcon svg {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n.vendorsFilters__options {\r\n    margin-top: 20px;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n.vendorsFilters__item {\r\n    margin: 0 0 10px;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__label {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 80%;\r\n    cursor: pointer;\r\n}\r\n.vendorsFilters__item--selected,\r\n.vendorsFilters__item.selected,\r\n.vendorsFilters__item:hover {\r\n    font-weight: 600;\r\n}\r\n/* category */\r\n.jguhHf {\r\n    font-family: proxima-nova, sans-serif;\r\n}\r\n.shadow_one {\r\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .05);\r\n    -moz-box-shadow: rgba(0, 0, 0, .05) 0 1px 5px 0, 0 1px 2px rgba(0, 0, 0, .05);\r\n    -webkit-box-shadow: rgba(0, 0, 0, .05) 0 1px 5px 0, 0 1px 2px rgba(0, 0, 0, .05);\r\n}\r\n.wFnqD {\r\n    box-sizing: border-box;\r\n    -webkit-transition: all 0.3s ease 0s;\r\n    transition: all 0.3s ease 0s;\r\n}\r\n.__react_component_tooltip.place-top {\r\n    margin-top: -10px;\r\n}\r\n.__react_component_tooltip.type-dark {\r\n    color: #fff;\r\n    background-color: #222;\r\n}\r\n.__react_component_tooltip.place-right {\r\n    margin-left: 10px;\r\n}\r\n.__react_component_tooltip.type-light {\r\n    color: #222;\r\n    background-color: #fff;\r\n}\r\n.tooltip-info,\r\n.PrimaryVendorCard .tooltip-info {\r\n    padding: 5px!important;\r\n    width: 350px;\r\n    line-height: 15px!important;\r\n}\r\n.text-bold {\r\n    font-weight: bold!important;\r\n}\r\n.__react_component_tooltip {\r\n    border-radius: 3px;\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    left: -999em;\r\n    opacity: 0;\r\n    padding: 8px 21px;\r\n    position: fixed;\r\n    pointer-events: none;\r\n    -webkit-transition: opacity 0.3s ease-out;\r\n    transition: opacity 0.3s ease-out;\r\n    top: -999em;\r\n    visibility: hidden;\r\n    z-index: 999;\r\n}\r\n.app-toggle-box i:before {\r\n    content: \"\\f106\";\r\n}\r\n.app-toggle-box.collapsed i:before {\r\n    content: \"\\f107\";\r\n}\r\n.__react_component_tooltip.show {\r\n    opacity: 1!important;\r\n    box-shadow: 0 0 1px 0 #909090;\r\n}\r\n.__react_component_tooltip.show {\r\n    opacity: 0.9;\r\n    margin-top: 0px;\r\n    margin-left: 0px;\r\n    visibility: visible;\r\n}\r\n.PrimaryVendorCard .vendor-card {\r\n    background-color: #fff;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    width: 100%;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-picture {\r\n    background: #d7d7d7;\r\n    width: 100%;\r\n    height: 210px;\r\n    position: relative;\r\n}\r\n.margin-r-10 {\r\n    margin-right: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n}\r\n.padding-10 {\r\n    padding: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.f-space-between {\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.frow,\r\n.vendor-dashboard-root {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line .vendor-detail {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-right: 10px;\r\n}\r\n.ellipsis,\r\n.nowrap {\r\n    white-space: nowrap;\r\n}\r\n.StarRating.regular {\r\n    min-width: 50px;\r\n    max-width: 50px;\r\n    height: 25px;\r\n}\r\n.rating-5 {\r\n    background-color: #e72e77;\r\n}\r\n.object-fit-cover {\r\n    -o-object-fit: cover;\r\n    object-fit: cover;\r\n}\r\n.StarRating {\r\n    border-radius: 2px;\r\n    color: #fff;\r\n}\r\n.AboutSection h6,\r\n.regular,\r\n.vendor-dashboard-root .vendor-sidenav-root .active .cnt,\r\n.vendor-dashboard-root .vendor-sidenav-root .cnt,\r\n.VendorLeads .LeadsFilter .DateRangeFilter .DateRangePicker .DateInput_input {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n}\r\n.center,\r\n.Profile .left-section .vendor-head .info-box .action-buttons .grid__col,\r\n.Profile .left-section .vendor-head .profile-pic .profile-actions .action-box,\r\n.VendorRoot .view-all {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .line .vendor-detail {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    margin-right: 10px;\r\n}\r\n.PrimaryVendorCard .vendor-card .vendor-info .vendor-price {\r\n    height: 30px;\r\n}\r\n.frow,\r\n.vendor-dashboard-root {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n}\r\n.PrimaryVendorCard .vendor-card hr {\r\n    border: none;\r\n    border-top: 1px dashed #909090;\r\n    color: #fff;\r\n    background-color: #fff;\r\n    height: 1px;\r\n    width: 100%;\r\n    opacity: .4;\r\n    margin: 0;\r\n}\r\n.margin-10 {\r\n    margin: 10px;\r\n}\r\n.PrimaryVendorCard:hover {\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\r\n}\r\n.text-primary {\r\n    color: #b4245d!important;\r\n}\r\n.margin-r-5 {\r\n    margin-right: 5px;\r\n}\r\n.margin-r-5 {\r\n    margin-right: 5px;\r\n}\r\n.h6,\r\n.vendor-dashboard-root .vendor-sidenav-root {\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n.vendor-card a {\r\n    color: #b4245d;\r\n}\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* category */\r\n/* favourite */\r\n.venue-box .venue-box-content .venue-favorite {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorites-button {\r\n    padding-top: 8px;\r\n    white-space: nowrap;\r\n}\r\n.venue-favorite .favorites-button.directory-favorite-unselected {\r\n    background: 0;\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.favorites-button.directory-favorite-unselected .icon-hb-nx-heart-filled,\r\n.favorites-button.directory-favorite-unselected .icon-hb-nx-heart-filled {\r\n    display: none;\r\n}\r\nx.favorites-button .icon-hb-nx-heart-filled,\r\n.favorites-button .icon-hb-nx-heart-filled {\r\n    display: none;\r\n}\r\n.venue-favorite .favorites-button .icon,\r\n.map-venue-box .favorites-button .icon {\r\n    font-size: 14px!important;\r\n    color: #815;\r\n    top: 2px;\r\n    position: relative;\r\n}\r\n.venue-favorite .favorites-button.directory-favorite-unselected .icon-hb-nx-heart,\r\n.map-venue-box .favorites-button.directory-favorite-unselected .icon-hb-nx-heart {\r\n    display: initial;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorite-label {\r\n    font-size: 13px;\r\n    color: #815;\r\n    padding-left: 4px;\r\n}\r\n.hidden {\r\n    display: none!important;\r\n    visibility: hidden!important;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .hint {\r\n    font-size: 13px;\r\n    color: #9b9b9b;\r\n    padding-left: 4px;\r\n    display: inline-block;\r\n}\r\n.venue-favorite .favorites-button .icon,\r\n.map-venue-box .favorites-button .icon {\r\n    font-size: 14px;\r\n    color: #815;\r\n    top: 2px;\r\n    position: relative;\r\n}\r\n[class^=\"icon-hb-\"],\r\n[class*=\" icon-hb-\"] {\r\n    font-family: 'iconbasic'!important;\r\n    /* speak: none; */\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n.venue-box .venue-box-content .venue-favorite .favorites-button {\r\n    padding-top: 8px;\r\n    white-space: nowrap;\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.icon-hb-nx-heart:before {\r\n    content: \"\\f004\";\r\n}\r\n.favorites-button {\r\n    width: 17px;\r\n    height: 17px;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n.rwview-cnt {\r\n    cursor: pointer;\r\n}\r\n.review-cnt:hover {\r\n    color: #b4245d;\r\n    cursor: pointer;\r\n}\r\n.__react_component_tooltip.place-right:before {\r\n    border-top: 6px solid transparent;\r\n    border-bottom: 6px solid transparent;\r\n    left: -8px;\r\n    top: 50%;\r\n    margin-top: -5px;\r\n}\r\n.__react_component_tooltip:before,\r\n.__react_component_tooltip:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n}\r\n.__react_component_tooltip.type-light.place-right:after,\r\n.PrimaryVendorCard .__react_component_tooltip.type-light.place-right:after {\r\n    border-right-color: #fff;\r\n}\r\n.__react_component_tooltip.type-light.place-right:after {\r\n    border-right-color: #fff;\r\n    border-right-style: solid;\r\n    border-right-width: 6px;\r\n}\r\n.__react_component_tooltip.place-right:after {\r\n    border-top: 5px solid transparent;\r\n    border-bottom: 5px solid transparent;\r\n    left: -6px;\r\n    top: 50%;\r\n    margin-top: -4px;\r\n}\r\n.GenieCard .tooltip-info:after,\r\n.PrimaryVendorCard .tooltip-info:after {\r\n    border-top-width: 6px!important;\r\n    border-bottom-width: 6px!important;\r\n}\r\n.__react_component_tooltip:before,\r\n.__react_component_tooltip:after {\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n}\r\n/* favourite */\r\n.vendor-picture .nowrap {\r\n    position: absolute!important;\r\n    right: 5px;\r\n    top: 5px;\r\n}\r\n/* end */\r\n#changeModal input{\r\n    border:0px !important;\r\n}\r\n#changeModal1 input{\r\n    border:0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL215cmVxdWVzdC9teXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMEJBQTBCO0FBQzFCO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQywrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksU0FBUztBQUNiO0FBR0EsaUJBQWlCO0FBRWpCO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFHQTtLQUNLO0FBRUw7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix3Q0FBd0M7QUFDNUM7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7QUFHQSx5Q0FBeUM7QUFFekM7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFHQSxhQUFhO0FBRWI7SUFDSSwwQkFBMEI7QUFDOUI7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7QUFDekI7QUFHQSxhQUFhO0FBRWI7SUFDSSxnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFFQTs7O0lBR0ksZ0JBQWdCO0FBQ3BCO0FBR0EsYUFBYTtBQUViO0lBQ0kscUNBQXFDO0FBQ3pDO0FBRUE7SUFDSSx3RUFBd0U7SUFDeEUsNkVBQTZFO0lBQzdFLGdGQUFnRjtBQUNwRjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCO0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5Q0FBaUM7SUFBakMsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG9CQUFvQjtJQUVwQiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBRXRCLG9CQUFhO0lBQWIsYUFBYTtJQUViLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUVJLG1CQUFTO1lBQVQsU0FBUztBQUNiO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFFYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBRUkseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQztBQUVBOztJQUdJLG9CQUFhO0lBQWIsYUFBYTtJQUViLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFFSSxtQkFBUztZQUFULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBRUE7Ozs7O0lBS0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBOzs7O0lBS0ksb0JBQWE7SUFBYixhQUFhO0lBRWIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUVuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFFSSxtQkFBUztZQUFULFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTs7SUFHSSxvQkFBYTtJQUFiLGFBQWE7SUFFYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLFNBQVM7QUFDYjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksd0RBQXdEO0FBQzVEO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7O0lBRUksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDZDQUE2QztJQUM3QyxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSxhQUFhO0FBR2IsY0FBYztBQUVkO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBOztJQUVJLGFBQWE7QUFDakI7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCO0FBRUE7O0lBRUksZUFBZTtJQUNmLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFFQTtJQUdJLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUVBOztJQUVJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7QUFFQTs7SUFFSSwrQkFBK0I7SUFDL0Isa0NBQWtDO0FBQ3RDO0FBRUE7O0lBRUksV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCO0FBR0EsY0FBYztBQUVkO0lBQ0ksNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixRQUFRO0FBQ1o7QUFDQSxRQUFRO0FBQ1I7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9teXJlcXVlc3QvbXlyZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogbmV3IHNlYXJjaCBwYWdpbmF0aW9uICovXHJcbi5mYS1jaGVjay1jaXJjbGUge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmEtdGltZXMtY2lyY2xlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5teS1mcmVha3ktdG9vbHRpcCAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMzQ5OGRiIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXktZnJlYWt5LXRvb2x0aXAgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYiFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxIWltcG9ydGFudDtcclxufVxyXG5cclxuLm15LWZyZWFreS10b29sdGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGIhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tY2xhc3MgLnRvb2x0aXAtaW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgZm9udC1zaXplOiAxMjUlO1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teS1jdXN0b20tY2xhc3MgLmFycm93OjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2IWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNiFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDQzMzYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZy16ZXJvIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYXJnaW4temVybyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKiBzaW1pbGFyIGhvbWUgKi9cclxuXHJcbi5zZWNvbmRfc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMTUwLCAxODEsIDAuMDQ4KTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiAuZlNlY3tcclxuICB9ICovXHJcblxyXG4udmVydGljYWxfY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jb2wtbWQtMyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnNlY29uZF9zZWN0aW9uPmltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjIpO1xyXG4gICAgLyogZmlsdGVyOiBibHVyKDEwcHgpIGJyaWdodG5lc3MoNTAlKTsgKi9cclxufVxyXG5cclxuLnNlY29uZF9zZWN0aW9uICoge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2Vjb25kX3NlY3Rpb24gaSB7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbn1cclxuXHJcbi5mb290ZXJfdXJsIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmZvb3Rlcl91cmw+cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFsLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb290ZXJfbGFzdD4uY29sLW1kLTIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmZvb3Rlcl9sYXN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLXNvY2lhbC1pY29ucyBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ob21lLXBhZ2UtYXNzdXJlZC1jb250ZW50IHtcclxuICAgIHdpZHRoOiA3MnB4IWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzJweCFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcblxyXG4vKiBJbnRyb2R1Y2luZyBTUyBBc3N1cmVkIFZlbmRvciBCYWRnZSAgKi9cclxuXHJcbi5ob21lLXBhZ2UtYXNzdXJlZC1jb250ZW50LW9wdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAvKiBtYXJnaW46IDBweDsgKi9cclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDAgMCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogbGF0byBsaWdodDtcclxufVxyXG5cclxuLmhvbWUtcGFnZS1hc3N1cmVkLWNvbnRlbnQgaSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzJweDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52bmRyLWhtLWN0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udmVuZG9yLWhvbWUtcGFnZS1jYXRlZ29yeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZS1ob21lLXBhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5zZWUtYWxsLWxpc3Qge1xyXG4gICAgY29sb3I6ICNmYTRhNmY7XHJcbiAgICBsaW5lLWhlaWdodDogNTRweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvbG9yLXBpbmsge1xyXG4gICAgY29sb3I6ICNmYTRhNmYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va19hX3ZlbmRvciB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNnZoIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8qIHNlbGVjdG9yICovXHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX29wdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbS0tc2VsZWN0ZWQsXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbS5zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX2xhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLS1zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLnNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW06aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsLnZlbmRvcnNGaWx0ZXJzX19vcHRpb25zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBzZWxlY3RvciAqL1xyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19zZWN0aW9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX3RpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnMgLnRvZ2dsZUFjdGl2ZSAudmVuZG9yc0ZpbHRlcnNfX3RvZ2dsZVVwIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX190b2dnbGVVcCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdmdJY29uIHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19fdG9nZ2xlVXAgc3ZnIHtcclxuICAgIGZpbGw6ICM4YzhjOGM7XHJcbn1cclxuXHJcbi5zdmdJY29uIHN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19vcHRpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbS0tc2VsZWN0ZWQsXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbS5zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtOmhvdmVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi52ZW5kb3JzRmlsdGVyc19faXRlbSB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udmVuZG9yc0ZpbHRlcnNfX2xhYmVsIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLS1zZWxlY3RlZCxcclxuLnZlbmRvcnNGaWx0ZXJzX19pdGVtLnNlbGVjdGVkLFxyXG4udmVuZG9yc0ZpbHRlcnNfX2l0ZW06aG92ZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbi8qIGNhdGVnb3J5ICovXHJcblxyXG4uamd1aEhmIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zaGFkb3dfb25lIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjA1KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjA1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAuMDUpIDAgMXB4IDVweCAwLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNSkgMCAxcHggNXB4IDAsIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbn1cclxuXHJcbi53Rm5xRCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAucGxhY2UtdG9wIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWRhcmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5wbGFjZS1yaWdodCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAudHlwZS1saWdodCB7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b29sdGlwLWluZm8sXHJcbi5QcmltYXJ5VmVuZG9yQ2FyZCAudG9vbHRpcC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDVweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsZWZ0OiAtOTk5ZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcGFkZGluZzogOHB4IDIxcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLW91dDtcclxuICAgIHRvcDogLTk5OWVtO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uYXBwLXRvZ2dsZS1ib3ggaTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYxMDZcIjtcclxufVxyXG5cclxuLmFwcC10b2dnbGUtYm94LmNvbGxhcHNlZCBpOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcZjEwN1wiO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDEhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMXB4IDAgIzkwOTA5MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCAjOTA5MDkwO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5zaG93IHtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uUHJpbWFyeVZlbmRvckNhcmQgLnZlbmRvci1jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLXBpY3R1cmUge1xyXG4gICAgYmFja2dyb3VuZDogI2Q3ZDdkNztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hcmdpbi1yLTEwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLWluZm8ge1xyXG4gICAgLW1zLWZsZXg6IDEgMTtcclxuICAgIGZsZXg6IDEgMTtcclxufVxyXG5cclxuLnBhZGRpbmctMTAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLWluZm8gLmxpbmUge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uZi1zcGFjZS1iZXR3ZWVuIHtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mcm93LFxyXG4udmVuZG9yLWRhc2hib2FyZC1yb290IHtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLWluZm8gLmxpbmUgLnZlbmRvci1kZXRhaWwge1xyXG4gICAgLW1zLWZsZXg6IDEgMTtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5lbGxpcHNpcyxcclxuLm5vd3JhcCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uU3RhclJhdGluZy5yZWd1bGFyIHtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLnJhdGluZy01IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzJlNzc7XHJcbn1cclxuXHJcbi5vYmplY3QtZml0LWNvdmVyIHtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5TdGFyUmF0aW5nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uQWJvdXRTZWN0aW9uIGg2LFxyXG4ucmVndWxhcixcclxuLnZlbmRvci1kYXNoYm9hcmQtcm9vdCAudmVuZG9yLXNpZGVuYXYtcm9vdCAuYWN0aXZlIC5jbnQsXHJcbi52ZW5kb3ItZGFzaGJvYXJkLXJvb3QgLnZlbmRvci1zaWRlbmF2LXJvb3QgLmNudCxcclxuLlZlbmRvckxlYWRzIC5MZWFkc0ZpbHRlciAuRGF0ZVJhbmdlRmlsdGVyIC5EYXRlUmFuZ2VQaWNrZXIgLkRhdGVJbnB1dF9pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uY2VudGVyLFxyXG4uUHJvZmlsZSAubGVmdC1zZWN0aW9uIC52ZW5kb3ItaGVhZCAuaW5mby1ib3ggLmFjdGlvbi1idXR0b25zIC5ncmlkX19jb2wsXHJcbi5Qcm9maWxlIC5sZWZ0LXNlY3Rpb24gLnZlbmRvci1oZWFkIC5wcm9maWxlLXBpYyAucHJvZmlsZS1hY3Rpb25zIC5hY3Rpb24tYm94LFxyXG4uVmVuZG9yUm9vdCAudmlldy1hbGwge1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkIC52ZW5kb3ItY2FyZCAudmVuZG9yLWluZm8gLmxpbmUgLnZlbmRvci1kZXRhaWwge1xyXG4gICAgLW1zLWZsZXg6IDEgMTtcclxuICAgIGZsZXg6IDEgMTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5QcmltYXJ5VmVuZG9yQ2FyZCAudmVuZG9yLWNhcmQgLnZlbmRvci1pbmZvIC52ZW5kb3ItcHJpY2Uge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uZnJvdyxcclxuLnZlbmRvci1kYXNoYm9hcmQtcm9vdCB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5QcmltYXJ5VmVuZG9yQ2FyZCAudmVuZG9yLWNhcmQgaHIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjOTA5MDkwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IC40O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFyZ2luLTEwIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLlByaW1hcnlWZW5kb3JDYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjYjQyNDVkIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hcmdpbi1yLTUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tci01IHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uaDYsXHJcbi52ZW5kb3ItZGFzaGJvYXJkLXJvb3QgLnZlbmRvci1zaWRlbmF2LXJvb3Qge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnZlbmRvci1jYXJkIGEge1xyXG4gICAgY29sb3I6ICNiNDI0NWQ7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuXHJcbi8qIGNhdGVnb3J5ICovXHJcblxyXG5cclxuLyogZmF2b3VyaXRlICovXHJcblxyXG4udmVudWUtYm94IC52ZW51ZS1ib3gtY29udGVudCAudmVudWUtZmF2b3JpdGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udmVudWUtYm94IC52ZW51ZS1ib3gtY29udGVudCAudmVudWUtZmF2b3JpdGUgLmZhdm9yaXRlcy1idXR0b24ge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi52ZW51ZS1mYXZvcml0ZSAuZmF2b3JpdGVzLWJ1dHRvbi5kaXJlY3RvcnktZmF2b3JpdGUtdW5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAwO1xyXG59XHJcblxyXG4uZmF2b3JpdGVzLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZhdm9yaXRlcy1idXR0b24uZGlyZWN0b3J5LWZhdm9yaXRlLXVuc2VsZWN0ZWQgLmljb24taGItbngtaGVhcnQtZmlsbGVkLFxyXG4uZmF2b3JpdGVzLWJ1dHRvbi5kaXJlY3RvcnktZmF2b3JpdGUtdW5zZWxlY3RlZCAuaWNvbi1oYi1ueC1oZWFydC1maWxsZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxueC5mYXZvcml0ZXMtYnV0dG9uIC5pY29uLWhiLW54LWhlYXJ0LWZpbGxlZCxcclxuLmZhdm9yaXRlcy1idXR0b24gLmljb24taGItbngtaGVhcnQtZmlsbGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52ZW51ZS1mYXZvcml0ZSAuZmF2b3JpdGVzLWJ1dHRvbiAuaWNvbixcclxuLm1hcC12ZW51ZS1ib3ggLmZhdm9yaXRlcy1idXR0b24gLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4IWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODE1O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52ZW51ZS1mYXZvcml0ZSAuZmF2b3JpdGVzLWJ1dHRvbi5kaXJlY3RvcnktZmF2b3JpdGUtdW5zZWxlY3RlZCAuaWNvbi1oYi1ueC1oZWFydCxcclxuLm1hcC12ZW51ZS1ib3ggLmZhdm9yaXRlcy1idXR0b24uZGlyZWN0b3J5LWZhdm9yaXRlLXVuc2VsZWN0ZWQgLmljb24taGItbngtaGVhcnQge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxufVxyXG5cclxuLnZlbnVlLWJveCAudmVudWUtYm94LWNvbnRlbnQgLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzgxNTtcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZlbnVlLWJveCAudmVudWUtYm94LWNvbnRlbnQgLnZlbnVlLWZhdm9yaXRlIC5oaW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi52ZW51ZS1mYXZvcml0ZSAuZmF2b3JpdGVzLWJ1dHRvbiAuaWNvbixcclxuLm1hcC12ZW51ZS1ib3ggLmZhdm9yaXRlcy1idXR0b24gLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM4MTU7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuW2NsYXNzXj1cImljb24taGItXCJdLFxyXG5bY2xhc3MqPVwiIGljb24taGItXCJdIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnaWNvbmJhc2ljJyFpbXBvcnRhbnQ7XHJcbiAgICAvKiBzcGVhazogbm9uZTsgKi9cclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcbioge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnZlbnVlLWJveCAudmVudWUtYm94LWNvbnRlbnQgLnZlbnVlLWZhdm9yaXRlIC5mYXZvcml0ZXMtYnV0dG9uIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uZmF2b3JpdGVzLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTdweDtcclxuICAgIGhlaWdodDogMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb24taGItbngtaGVhcnQ6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDA0XCI7XHJcbn1cclxuXHJcbi5mYXZvcml0ZXMtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucnd2aWV3LWNudCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXZpZXctY250OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjYjQyNDVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC5wbGFjZS1yaWdodDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgbGVmdDogLThweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXA6YmVmb3JlLFxyXG4uX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnR5cGUtbGlnaHQucGxhY2UtcmlnaHQ6YWZ0ZXIsXHJcbi5QcmltYXJ5VmVuZG9yQ2FyZCAuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcC50eXBlLWxpZ2h0LnBsYWNlLXJpZ2h0OmFmdGVyIHtcclxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAudHlwZS1saWdodC5wbGFjZS1yaWdodDphZnRlciB7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwLnBsYWNlLXJpZ2h0OmFmdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGxlZnQ6IC02cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbn1cclxuXHJcbi5HZW5pZUNhcmQgLnRvb2x0aXAtaW5mbzphZnRlcixcclxuLlByaW1hcnlWZW5kb3JDYXJkIC50b29sdGlwLWluZm86YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogNnB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5fX3JlYWN0X2NvbXBvbmVudF90b29sdGlwOmJlZm9yZSxcclxuLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXA6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5cclxuLyogZmF2b3VyaXRlICovXHJcblxyXG4udmVuZG9yLXBpY3R1cmUgLm5vd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcbi8qIGVuZCAqL1xyXG4jY2hhbmdlTW9kYWwgaW5wdXR7XHJcbiAgICBib3JkZXI6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuI2NoYW5nZU1vZGFsMSBpbnB1dHtcclxuICAgIGJvcmRlcjowcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/vendor/myrequest/myrequest.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/vendor/myrequest/myrequest.component.ts ***!
  \*********************************************************/
/*! exports provided: MyrequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrequestComponent", function() { return MyrequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyrequestComponent = /** @class */ (function () {
    function MyrequestComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.searchResult = [];
        this.searchResult1 = [];
        this.searchResult2 = [];
        this.infoHover = [];
        this.infoHover1 = [];
        this.infoHover2 = [];
        // this.tArray = new Array();
        // this.tArray1 = new Array();
        // this.tArray2 = new Array();
        var obj = JSON.parse(localStorage.getItem('current_vendor'));
        this.auth.getCities().subscribe(function (res) {
            _this.cities = res;
            //   this.dataTable = {
            //     headerRow: [ 'Name', 'Phone', 'Date','City',"Status","Actions" ],
            //     footerRow: [ 'Name', 'Phone', 'Date','City',"Status",'Actions' ],
            //     dataRows:[]
            //  };
            //  this.dataTable1 = {
            //   headerRow: [ 'Name', 'Phone', 'Date','City',"Actions" ],
            //   footerRow: [ 'Name', 'Phone', 'Date','City','Actions' ],
            //   dataRows: []
            //     };
            //   this.dataTable2 = {
            //       headerRow: [ 'Name', 'Phone', 'Date','City',"Actions" ],
            //       footerRow: [ 'Name', 'Phone', 'Date','City','Actions' ],
            //       dataRows:[]
            //   };
            _this.auth.getLeads(obj['_id']).subscribe(function (res) {
                console.log('>>  get Review << ');
                console.log(res);
                res.forEach(function (sub) {
                    // var temp = new Array();
                    // temp.push(sub['fullName']);
                    // temp.push(sub['phoneNumber']);
                    // temp.push(sub['eventDate']);
                    // temp.push(this.cities[sub['eventCity']].name);
                    // temp.push(sub['leadStatus']);
                    _this.searchResult.push(sub);
                    if (sub['leadStatus'] != 'allow')
                        _this.searchResult1.push(sub);
                    if (sub['leadStatus'] == 'allow')
                        _this.searchResult2.push(sub);
                });
                //   this.dataTable = {
                //     headerRow: [ 'Name', 'Phone', 'Date','City',"Status","Actions" ],
                //     footerRow: [ 'Name', 'Phone', 'Date','City',"Status",'Actions' ],
                //     dataRows: this.tArray
                //  };
                //  this.dataTable1 = {
                //   headerRow: [ 'Name', 'Phone', 'Date','City',"Actions" ],
                //   footerRow: [ 'Name', 'Phone', 'Date','City','Actions' ],
                //   dataRows: this.tArray1
                //     };
                //     this.dataTable2 = {
                //       headerRow: [ 'Name', 'Phone', 'Date','City',"Actions" ],
                //       footerRow: [ 'Name', 'Phone', 'Date','City','Actions' ],
                //       dataRows: this.tArray2
                //   };
            }, function (err) {
            });
        });
    }
    MyrequestComponent.prototype.ngOnInit = function () {
    };
    MyrequestComponent.prototype.ngAfterViewInit = function () {
        // $('#datatables').DataTable({
        //   "pagingType": "full_numbers",
        //   "lengthMenu": [
        //     [10, 25, 50, -1],
        //     [10, 25, 50, "All"]
        //   ],
        //   responsive: true,
        //   language: {
        //     search: "_INPUT_",
        //     searchPlaceholder: "Search records",
        //   }
        // });
        // $('#datatables1').DataTable({
        //   "pagingType": "full_numbers",
        //   "lengthMenu": [
        //     [10, 25, 50, -1],
        //     [10, 25, 50, "All"]
        //   ],
        //   responsive: true,
        //   language: {
        //     search: "_INPUT_",
        //     searchPlaceholder: "Search records",
        //   }
        // });
        // $('#datatables2').DataTable({
        //   "pagingType": "full_numbers",
        //   "lengthMenu": [
        //     [10, 25, 50, -1],
        //     [10, 25, 50, "All"]
        //   ],
        //   responsive: true,
        //   language: {
        //     search: "_INPUT_",
        //     searchPlaceholder: "Search records",
        //   }
        // });
        // const table = $('#datatables').DataTable();
        // const table1 = $('#datatables1').DataTable();
        // const table2 = $('#datatables2').DataTable();
        // table.on('click', '.edit', function(e) {
        //   let $tr = $(this).closest('tr');
        //   if ($($tr).hasClass('child')) {
        //     $tr = $tr.prev('.parent');
        //   }
        //   var data = table.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // table1.on('click', '.edit', function(e) {
        //   let $tr = $(this).closest('tr');
        //   if ($($tr).hasClass('child')) {
        //     $tr = $tr.prev('.parent');
        //   }
        //   var data = table1.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // table2.on('click', '.edit', function(e) {
        //   let $tr = $(this).closest('tr');
        //   if ($($tr).hasClass('child')) {
        //     $tr = $tr.prev('.parent');
        //   }
        //   var data = table2.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // table.on('click', '.remove', function(e) {
        //   const $tr = $(this).closest('tr');
        //   table.row($tr).remove().draw();
        //   e.preventDefault();
        // });
        // table1.on('click', '.remove', function(e) {
        //   const $tr = $(this).closest('tr');
        //   table1.row($tr).remove().draw();
        //   e.preventDefault();
        // });
        // table2.on('click', '.remove', function(e) {
        //   const $tr = $(this).closest('tr');
        //   table2.row($tr).remove().draw();
        //   e.preventDefault();
        // });
        // table.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        // table1.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        // table2.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        // $('.card .material-datatables label').addClass('form-group');
    };
    MyrequestComponent.prototype.onChangePage = function (pageOfItems) {
        this.pageOfItems = pageOfItems;
    };
    MyrequestComponent.prototype.onChangePage1 = function (pageOfItems1) {
        this.pageOfItems1 = pageOfItems1;
    };
    MyrequestComponent.prototype.onChangePage2 = function (pageOfItems2) {
        this.pageOfItems2 = pageOfItems2;
    };
    MyrequestComponent.prototype.pendingFunc = function (_id, date, email) {
        var _this = this;
        console.log(' ========== pendingFunc func ========');
        console.log(_id);
        console.log(' ========== pendingFunc func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        var temp;
        this.searchResult.forEach(function (x) {
            if (x._id == _id) {
                x.leadStatus = 'pending';
            }
        });
        this.pageOfItems.forEach(function (x) {
            if (x._id == _id)
                x.leadStatus = 'pending';
        });
        this.searchResult2.forEach(function (elements, index) {
            if (elements._id == _id) {
                indSearch1 = index;
                temp = elements;
            }
        });
        this.pageOfItems2.forEach(function (elements, index) {
            if (elements._id == _id)
                indPage1 = index;
        });
        this.searchResult2.splice(indSearch1, 1);
        this.pageOfItems2.splice(indPage1, 1);
        this.searchResult1.push(temp);
        this.auth.setStatusLeadsRealVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 4, 'You have just Pended  successfully');
            console.log(res);
        });
    };
    MyrequestComponent.prototype.acceptFunc = function (_id, date, email) {
        var _this = this;
        console.log(' ========== acceptFunc func ========');
        console.log(_id);
        console.log(' ========== acceptFunc func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        //  var temp:ClientQuotation;
        var temp;
        this.searchResult.forEach(function (x) {
            if (x._id == _id) {
                x.leadStatus = 'allow';
            }
        });
        this.pageOfItems.forEach(function (x) {
            if (x._id == _id)
                x.leadStatus = 'allow';
        });
        this.searchResult1.forEach(function (elements, index) {
            if (elements._id == _id) {
                indSearch1 = index;
                temp = elements;
            }
        });
        this.pageOfItems1.forEach(function (elements, index) {
            if (elements._id == _id)
                indPage1 = index;
        });
        this.searchResult1.splice(indSearch1, 1);
        this.pageOfItems1.splice(indPage1, 1);
        this.searchResult2.push(temp);
        this.auth.setStatusLeadsRealVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 2, 'You have just Acceted  successfully');
            console.log(res);
        });
    };
    MyrequestComponent.prototype.cancelFunc = function (date, email, flag) {
        var _this = this;
        console.log(' ========== close func ========');
        console.log(date);
        console.log(' ========== close func ========');
        var indSearch = -1;
        var indPage = -1;
        var indSearch1 = -1;
        var indPage1 = -1;
        this.searchResult.forEach(function (elements, index) {
            if (elements.eventDate == date)
                indSearch = index;
        });
        this.pageOfItems.forEach(function (elements, index) {
            if (elements.eventDate == date)
                indPage = index;
        });
        this.searchResult.splice(indSearch, 1);
        this.pageOfItems.splice(indPage, 1);
        if (flag != 'allow') {
            this.searchResult1.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indSearch1 = index;
            });
            this.pageOfItems1.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indPage1 = index;
            });
            this.searchResult1.splice(indSearch1, 1);
            this.pageOfItems1.splice(indPage1, 1);
        }
        else {
            this.searchResult2.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indSearch1 = index;
            });
            this.pageOfItems2.forEach(function (elements, index) {
                if (elements.eventDate == date)
                    indPage1 = index;
            });
            this.searchResult2.splice(indSearch1, 1);
            this.pageOfItems2.splice(indPage1, 1);
        }
        //  var obj = JSON.parse(localStorage.getItem('current_client'));
        this.auth.delLeadsRealVendor(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 4, 'You have just calcened successfully');
            console.log(res);
        });
    };
    MyrequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myrequest',
            template: __webpack_require__(/*! raw-loader!./myrequest.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/myrequest/myrequest.component.html"),
            styles: [__webpack_require__(/*! ./myrequest.component.css */ "./src/app/vendor/myrequest/myrequest.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthWedService"]])
    ], MyrequestComponent);
    return MyrequestComponent;
}());



/***/ }),

/***/ "./src/app/vendor/myreview/myreview.component.css":
/*!********************************************************!*\
  !*** ./src/app/vendor/myreview/myreview.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9teXJldmlldy9teXJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/myreview/myreview.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/vendor/myreview/myreview.component.ts ***!
  \*******************************************************/
/*! exports provided: MyreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreviewComponent", function() { return MyreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyreviewComponent = /** @class */ (function () {
    function MyreviewComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.tArray = new Array();
        this.obj = JSON.parse(localStorage.getItem('current_vendor'));
        this.auth.getReviews(this.obj['_id']).subscribe(function (res) {
            console.log('>>  get Review << ');
            console.log(res);
            res.forEach(function (sub) {
                var temp = new Array();
                temp.push(sub['reviewName']);
                temp.push(sub['reviewEmail']);
                temp.push(sub['reviewDate']);
                temp.push(sub['reviewSubject']);
                temp.push(sub['reviewWrite']);
                temp.push(sub['reviewOverallRating']);
                _this.tArray.push(temp);
            });
            if (_this.obj['reviewNum'] > 0 && _this.obj['membership'] > 0) {
                _this.dataTable = {
                    headerRow: ['Name', 'Email', 'Date', 'Subject', 'Write', 'OverallRating', 'Actions'],
                    footerRow: ['Name', 'Email', 'Date', 'Subject', 'Write', 'OverallRating', 'Actions'],
                    dataRows: _this.tArray
                };
            }
            else {
                _this.dataTable = {
                    headerRow: ['Name', 'Email', 'Date', 'Subject', 'Write', 'OverallRating'],
                    footerRow: ['Name', 'Email', 'Date', 'Subject', 'Write', 'OverallRating'],
                    dataRows: _this.tArray
                };
            }
        }, function (err) {
        });
    }
    MyreviewComponent.prototype.ngOnInit = function () {
        // this.dataTable = {
        //     headerRow: [ 'Name', 'Date', 'Subject', 'Write', 'OverallRating' ],
        //     footerRow: [ 'Name', 'Date', 'Subject', 'Write', 'OverallRating'],
        //     dataRows: this.tArray
        //  };  
    };
    MyreviewComponent.prototype.delFunc = function (email, date) {
        var _this = this;
        this.auth.delReview(email, date).subscribe(function (res) {
            _this.auth.showNotification('top', 'right', 2, 'This review has just  removed.');
            _this.auth.reduceNum(_this.obj['_id']).subscribe(function (res) {
                _this.obj['reviewNum'] -= 1;
                console.log('reduceNum');
                console.log(res);
            });
        });
    };
    MyreviewComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        // Edit record
        // table.on('click', '.edit', function(e) {
        //   let $tr = $(this).closest('tr');
        //   if ($($tr).hasClass('child')) {
        //     $tr = $tr.prev('.parent');
        //   }
        //   var data = table.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        // table.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        $('.card .material-datatables label').addClass('form-group');
    };
    MyreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myreview',
            template: __webpack_require__(/*! raw-loader!./myreview.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/myreview/myreview.component.html"),
            styles: [__webpack_require__(/*! ./myreview.component.css */ "./src/app/vendor/myreview/myreview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthWedService"]])
    ], MyreviewComponent);
    return MyreviewComponent;
}());



/***/ }),

/***/ "./src/app/vendor/pastwork/pastwork.component.css":
/*!********************************************************!*\
  !*** ./src/app/vendor/pastwork/pastwork.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-title {\r\n    font-size: 1.5em;\r\n    line-height: 1.33;\r\n    font-weight: 700;\r\n    padding-top: 16px;\r\n    padding-bottom: 16px;\r\n}\r\n.fu-btn {\r\n    width: 100%;\r\n    background: #f2ecea;\r\n    border: none;\r\n    height: 160px;\r\n    color: #fa5c57;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.upload-plus {\r\n    display: block;\r\n    font-size: 2.5em;\r\n    font-weight: 400;\r\n}\r\n.snippet-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -8px;\r\n    margin-right: -8px;\r\n}\r\n.file-upload {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: block;\r\n    /* width: 100%; */\r\n    width:160px;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    height: 160px;\r\n    border-radius: 4px;\r\n}\r\n.pw-snippet {\r\n    position: relative;\r\n    display: inline-table;\r\n    width: 160px;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    margin-bottom: 16px;\r\n    cursor: pointer;\r\n}\r\n.pw-snippet-video-overlay {\r\n    background: rgba(0,0,0,.51);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    top: 0;\r\n    border-radius: 4px;\r\n    left: 0;\r\n}\r\n.pw-video-thumb-c {\r\n    position: relative;\r\n}\r\n.pw-snippet img {\r\n    width: 100%;\r\n    height: 160px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 4px;\r\n    display: block;\r\n}\r\n.no_image{\r\n    background-color: #f2ecea;\r\n    width: 160px;\r\n    height: 160px;\r\n    border-radius: 3%;\r\n}\r\nimg {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n.pw-title {\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    color: #353b50;\r\n    padding: 4px 0;\r\n}\r\n.pw-counts {\r\n    opacity: .6;\r\n    font-size: .75em;\r\n    line-height: 1.33;\r\n    color: #353b50;\r\n}\r\n.pw-snippet-video-overlay i {\r\n    display: block;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    top: 50%;\r\n    right: unset;\r\n    font-size: 3em;\r\n    color: #fff;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Bhc3R3b3JrL3Bhc3R3b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsT0FBTztBQUNYO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixRQUFRO0lBQ1IsWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yL3Bhc3R3b3JrL3Bhc3R3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4uZnUtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2YyZWNlYTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBjb2xvcjogI2ZhNWM1NztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbi51cGxvYWQtcGx1cyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5zbmlwcGV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04cHg7XHJcbn1cclxuLmZpbGUtdXBsb2FkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgd2lkdGg6MTYwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wdy1zbmlwcGV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnB3LXNuaXBwZXQtdmlkZW8tb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41MSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuLnB3LXZpZGVvLXRodW1iLWMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wdy1zbmlwcGV0IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ub19pbWFnZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmVjZWE7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMyU7XHJcbn1cclxuaW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuLnB3LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzM1M2I1MDtcclxuICAgIHBhZGRpbmc6IDRweCAwO1xyXG59XHJcbi5wdy1jb3VudHMge1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBmb250LXNpemU6IC43NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzM7XHJcbiAgICBjb2xvcjogIzM1M2I1MDtcclxufVxyXG4ucHctc25pcHBldC12aWRlby1vdmVybGF5IGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiB1bnNldDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/pastwork/pastwork.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/vendor/pastwork/pastwork.component.ts ***!
  \*******************************************************/
/*! exports provided: PastworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastworkComponent", function() { return PastworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PastworkComponent = /** @class */ (function () {
    function PastworkComponent(http, form, auth, embedService) {
        this.http = http;
        this.form = form;
        this.auth = auth;
        this.embedService = embedService;
        this.newAlbum = 'asdas';
        this.NowVideoObj = '';
        this.allAlbumInfo = [];
        this.allVideoInfo = [];
        this.allImgs = [];
        this.NowVideo = '';
        this.curObj = JSON.parse(localStorage.getItem('current_vendor'));
        this.showVideo();
        this.showAlbum();
    }
    PastworkComponent.prototype.showVideo = function () {
        var _this = this;
        this.auth.getVideo().subscribe(function (res) {
            console.log('========= getvideo =======');
            _this.allVideoInfo = res;
            _this.NowVideo = res[0];
            _this.vimeo_iframe_html = [];
            _this.allVideoInfo.forEach(function (element) {
                _this.vimeo_iframe_html.push(_this.embedService.embed(element, { attr: { width: 160, height: 160 } }));
            });
            console.log(_this.NowVideo);
            console.log(_this.allVideoInfo);
            console.log('======== end video =====');
        });
    };
    PastworkComponent.prototype.showAlbum = function () {
        var _this = this;
        // this.auth.getAlbum().subscribe((res:any)=>{
        //   console.log('sub')
        //   console.log(res);
        //   this.allAlbumInfo = res;
        // },(err)=>{
        //   console.log('err')
        //   console.log(err)
        // });
        this.auth.getAllImgs(this.curObj._id).subscribe(function (res) {
            console.log('all');
            console.log(res);
            _this.allImgs = res;
            _this.groupArr = _this.allImgs.reduce(function (r, a) {
                // console.log("a", a);
                // console.log('r', r);
                r[a.albumName] = (r[a.albumName] || []).concat([a]);
                return r;
            }, {});
            console.log("group", _this.groupArr);
            console.log(_this.curObj.pastworkPhotos);
            //  this.curObj.pastworkPhotos.forEach(element => {
            //   console.log(this.groupArr[element][0].src)
            //   console.log(this.groupArr[element][0].albumName)
            // });
            //  console.log(this.groupArr['asdasdsa'][0].src)
        });
    };
    PastworkComponent.prototype.ngOnInit = function () {
        // this.auth.getVideo().subscribe((res:any)=>{
        //   console.log('========= getvideo =======')
        //   this.allVideoInfo = res;
        //   this.NowVideo = res[0];
        //   console.log(this.NowVideo)
        //   console.log(this.allVideoInfo)
        //   console.log('======== end video =====')
        // })
        // this.auth.getAlbum().subscribe((res:any)=>{
        //   console.log('sub')
        //   console.log(res);
        //   this.allAlbumInfo = res;
        // },(err)=>{
        //   console.log('err')
        //   console.log(err)
        // });
    };
    PastworkComponent.prototype.addNewAlbum = function () {
        this.showSwal('Add New Album', 'Your New Album Name');
        // alert(this.photos);
        // this.auth.getAlbum().subscribe((res:any)=>{
        //   console.log('getALbum');
        // });
    };
    PastworkComponent.prototype.addNewVideo = function () {
        this.showSwalVideo('Add New Video', 'You can input youtube video url...');
    };
    PastworkComponent.prototype.showSwal = function (c_title, c_content) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: c_title,
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" />' +
                '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function (result) {
            _this.newAlbum = $('#input-field').val();
            // console.log($('#input-field').val());
            // console.log(this.newAlbum);
            if ($('#input-field').val() != '') {
                console.log('a');
                console.log(_this.newAlbum);
                _this.auth.addNewAlbum(_this.newAlbum).subscribe(function (res) {
                    console.log('d');
                    console.log(res);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        type: 'success',
                        html: c_content + ': <strong>' +
                            _this.newAlbum +
                            '</strong>',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    });
                    // this.curObj = JSON.parse(localStorage.getItem('current_vendor'))
                    _this.curObj.pastworkPhotos.push(_this.newAlbum);
                    localStorage.setItem('current_vendor', JSON.stringify(_this.curObj));
                    _this.showAlbum();
                    _this.allAlbumInfo.push({ 'album': _this.newAlbum, path: '/public/uploads/' + localStorage.getItem('id') + '/' + _this.newAlbum, photos: 'none', count: 0 });
                }, function (err) {
                    // console.log('error_d')  
                    console.log(err);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: 'Wrong',
                        text: "you can't same album name",
                        buttonsStyling: false,
                        confirmButtonClass: "btn btn-danger",
                        type: "warning"
                    });
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                    title: 'Wrong',
                    text: 'you have to input name',
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-danger",
                    type: "warning"
                });
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
    };
    PastworkComponent.prototype.showSwalVideo = function (c_title, c_content) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: c_title,
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" />' +
                '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function (result) {
            _this.videoUrl = $('#input-field').val();
            if (_this.videoUrl != undefined || _this.videoUrl != '') {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                var match = _this.videoUrl.match(regExp);
                console.log('111');
                if (match && match[2].length == 11) {
                    console.log('222');
                    // this.NowVideoObj = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1';
                    // this.NowVideoObj = 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&amp;enablejsapi=1';
                    console.log(_this.videoUrl);
                    _this.auth.addVideoUrl(_this.videoUrl).subscribe(function (res) {
                        console.log('video');
                        console.log(res);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            type: 'success',
                            html: c_content + ': <strong>' +
                                $('#input-field').val() +
                                '</strong>',
                            confirmButtonClass: 'btn btn-success',
                            buttonsStyling: false
                        });
                        _this.showVideo();
                    }, function (err) {
                        console.log(err);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                            title: 'Wrong',
                            text: "Exist same Video URL",
                            buttonsStyling: false,
                            confirmButtonClass: "btn btn-danger",
                            type: "warning"
                        });
                    });
                    // $('#videoObject').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1');
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                        title: 'Wrong',
                        text: 'you have to correct input youtube url name',
                        buttonsStyling: false,
                        confirmButtonClass: "btn btn-danger",
                        type: "warning"
                    });
                }
            }
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
    };
    PastworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pastwork',
            template: __webpack_require__(/*! raw-loader!./pastwork.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/pastwork/pastwork.component.html"),
            styles: [__webpack_require__(/*! ./pastwork.component.css */ "./src/app/vendor/pastwork/pastwork.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthWedService"], ngx_embed_video__WEBPACK_IMPORTED_MODULE_5__["EmbedVideoService"]])
    ], PastworkComponent);
    return PastworkComponent;
}());



/***/ }),

/***/ "./src/app/vendor/pastwork/previewupload/previewupload.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/vendor/pastwork/previewupload/previewupload.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-title {\r\n    font-size: 1.5em;\r\n    line-height: 1.33;\r\n    font-weight: 700;\r\n    padding-top: 16px;\r\n    padding-bottom: 16px;\r\n}\r\n.fu-btn {\r\n    width: 100%;\r\n    background: #f2ecea;\r\n    border: none;\r\n    height: 160px;\r\n    color: #fa5c57;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    width: 100%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n}\r\n.upload-plus {\r\n    display: block;\r\n    font-size: 2.5em;\r\n    font-weight: 400;\r\n}\r\n.snippet-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-left: -8px;\r\n    margin-right: -8px;\r\n}\r\n.file-upload {\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: block;\r\n    /* width: 100%; */\r\n    width:160px;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    height: 160px;\r\n    border-radius: 4px;\r\n}\r\n.pw-snippet {\r\n    position: relative;\r\n    display: inline-table;\r\n    width: 160px;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    margin-bottom: 16px;\r\n    cursor: pointer;\r\n}\r\n.pw-snippet-video-overlay {\r\n    background: rgba(0,0,0,.51);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    top: 0;\r\n    border-radius: 4px;\r\n    left: 0;\r\n}\r\n.pw-video-thumb-c {\r\n    position: relative;\r\n}\r\n.pw-snippet img {\r\n    width: 100%;\r\n    height: 160px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 4px;\r\n    display: block;\r\n    background: var(--background);\r\n}\r\nimg {\r\n    vertical-align: middle;\r\n    border-style: none;\r\n}\r\n.pw-title {\r\n    font-size: 16px;\r\n    line-height: 1.5;\r\n    color: #353b50;\r\n    padding: 4px 0;\r\n}\r\n.pw-snippet-video-overlay i {\r\n    display: block;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%);\r\n    top: 50%;\r\n    right: unset;\r\n    font-size: 3em;\r\n    color: #fff;\r\n    position: relative;\r\n}\r\n.pw-snippet {\r\n    position: relative;\r\n    display: inline-table;\r\n    width: 160px;\r\n    margin-left: 8px;\r\n    margin-right: 8px;\r\n    margin-bottom: 16px;\r\n    cursor: pointer;\r\n}\r\n.pw-snippet img {\r\n    width: 100%;\r\n    height: 160px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 4px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3Bhc3R3b3JrL3ByZXZpZXd1cGxvYWQvcHJldmlld3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixZQUFZO0lBQ1osY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wYXN0d29yay9wcmV2aWV3dXBsb2FkL3ByZXZpZXd1cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zMztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcbi5mdS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJlY2VhO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGNvbG9yOiAjZmE1YzU3O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLnVwbG9hZC1wbHVzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLnNuaXBwZXQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxufVxyXG4uZmlsZS11cGxvYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICB3aWR0aDoxNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnB3LXNuaXBwZXQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucHctc25pcHBldC12aWRlby1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUxKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ucHctdmlkZW8tdGh1bWItYyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnB3LXNuaXBwZXQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxufVxyXG5pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG4ucHctdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjMzUzYjUwO1xyXG4gICAgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuLnB3LXNuaXBwZXQtdmlkZW8tb3ZlcmxheSBpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogdW5zZXQ7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wdy1zbmlwcGV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnB3LXNuaXBwZXQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/vendor/pastwork/previewupload/previewupload.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/vendor/pastwork/previewupload/previewupload.component.ts ***!
  \**************************************************************************/
/*! exports provided: PreviewuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewuploadComponent", function() { return PreviewuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// const URL = '/api/';
var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var PreviewuploadComponent = /** @class */ (function () {
    function PreviewuploadComponent(router, route, http, form, auth, storage) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.form = form;
        this.auth = auth;
        this.storage = storage;
        this.imgSrc = [];
        this.selectedImgs = [];
        this.images = [];
        this.previewUrl = [];
        this.urls = new Array();
        this.fileUploadProgress = null;
        this.fileUploadProgressPercent = 0;
        this.allPhoto = [];
    }
    PreviewuploadComponent.prototype.ngOnInit = function () {
        this.curObj = JSON.parse(localStorage.getItem('current_vendor'));
        this.showImg();
    };
    PreviewuploadComponent.prototype.showImg = function () {
        var _this = this;
        this.allPhoto = [];
        this.auth.getAllImgs(this.curObj._id).subscribe(function (res) {
            _this.allPhoto = res;
            console.log('TTTTTTTTTTTTTTT');
            console.log(_this.route.snapshot.params.id);
            console.log('TTTTTTTTTTTTTTT');
            _this.allPhoto = _this.allPhoto.filter(function (element) { return (element.albumName == _this.route.snapshot.params.id); });
        });
        // console.log('ddfdfdf');
        // this.auth.getPhotos(this.route.snapshot.params.id).subscribe((res:any)=>{
        //   console.log('sub')
        //   console.log(res);
        //   var temp = JSON.parse(localStorage.getItem('current_vendor'));
        //   if(temp && !temp['mainImg'] && res && res[0] && res[0]['path']){
        //       this.auth.setMainImg(res[0]['path']).subscribe((res)=>{
        //       console.log('setmain img')
        //     }) 
        //   }
        //   this.allPhoto = res;
        // },(err)=>{
        //   console.log('err')
        //   console.log(err)
        // });
    };
    PreviewuploadComponent.prototype.preview = function () {
        // Show preview 
        var i;
        i = 0;
        this.urls = [];
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
            var image = _a[_i];
            console.log(i);
            console.log(image);
            var mimeType = image.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            reader.onload = function (_event) {
                // this.previewUrl[i] = reader.result; 
                // this.urls.push(_event.target.result.toString());
                // this.urls.push(_event.target.toString());
                // console.log(this.urls);
                // console.log(i + ' : ' + this.previewUrl[i]);
            };
            reader.readAsDataURL(image);
            i++;
        }
    };
    // selectImg(event){
    //   if(event.target.files.length > 0){
    //     this.images  = event.target.files;
    //     console.log(this.images);
    //     this.preview();
    //     const formData = new FormData();
    //     for(let file of this.images){
    //       formData.append('files',file);
    //     }
    //     this.fileUploadProgress = '0%';
    //     // this.http.post<any>('http://localhost:5000/upload-imgs',formData).subscribe(
    //     //   (err)=>console.log(err),
    //     //   (res)=>{
    //     //       this.photos = res.results;
    //     //   }
    //     // )
    //     // var pid = localStorage.getItem('id');
    //     var palbum = this.route.snapshot.params.id;
    //     this.http.post(`http://localhost:5000/upload-imgs/${palbum}`,formData, {
    //       // this.http.post(`/upload-imgs/${palbum}`,formData, {
    //           reportProgress: true,
    //           observe: 'events'   
    //         })
    //         .subscribe(events => {
    //           if(events.type === HttpEventType.UploadProgress) {
    //             this.fileUploadProgress = this.fileUploadProgressPercent + '%';
    //             console.log(this.fileUploadProgress);
    //           } else if(events.type === HttpEventType.Response) {
    //             this.fileUploadProgress = '';
    //             console.log(events.body); 
    //             console.log(this.fileUploadProgress)         
    //             this.allPhoto = [];
    //             this.auth.showSwal('success-message','success',"complete uploaded successfully");
    //             this.showImg();
    //           }
    //         }) 
    //     }
    //   }
    PreviewuploadComponent.prototype.selectImg = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            for (var i = 0; i < event.target.files.length; i++) {
                var render = new FileReader();
                render.onload = function (e) { return _this.imgSrc.push(e.target.result); };
                render.readAsDataURL(event.target.files[i]);
                this.selectedImgs.push(event.target.files[i]);
            }
            // event.target.files.forEach(element => {
            //   this.selectedImgs.push(element)
            // });
            // this.selectedImgs = event.target.files[0];
            this.onsubmit();
        }
    };
    PreviewuploadComponent.prototype.onsubmit = function () {
        var _this = this;
        console.log(this.selectedImgs);
        var _loop_1 = function (i) {
            // console.log(this.selectedImgs)
            fileName = this_1.selectedImgs[i]['name'].split('.').slice(0, -1).join('.') + '_' + new Date().getTime();
            filePath = this_1.curObj._id + "/" + this_1.route.snapshot.params.id + "/" + fileName;
            var fileRef = this_1.storage.ref(filePath);
            this_1.storage.upload(filePath, this_1.selectedImgs[i]).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                fileRef.getDownloadURL().subscribe(function (url) {
                    _this.auth.addImg(_this.curObj._id, _this.route.snapshot.params.id, url).subscribe(function (res) {
                        console.log(res);
                    });
                    if (_this.curObj.mainImg == undefined) {
                        _this.auth.setMainImg(url).subscribe(function (res) {
                        });
                    }
                    // console.log(url);
                    // this.imgSrc.push(url);
                });
            })).subscribe();
        };
        var this_1 = this, fileName, filePath;
        // this.imgSrc = [];
        for (var i = 0; i < this.selectedImgs.length; i++) {
            _loop_1(i);
        }
    };
    PreviewuploadComponent.prototype.selImgNew = function (url) {
        this.auth.setMainProImg('Main Img', 'You can set Main Profile Image', url, 400, 200, this.curObj._id);
    };
    PreviewuploadComponent.prototype.selImg = function (obj) {
        this.auth.setMainProImg('Main Img', 'You can set Main Profile Image', obj.src, 400, 200, obj.vendorId._id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewuploadComponent.prototype, "album_name", void 0);
    PreviewuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-previewupload',
            template: __webpack_require__(/*! raw-loader!./previewupload.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/pastwork/previewupload/previewupload.component.html"),
            styles: [__webpack_require__(/*! ./previewupload.component.css */ "./src/app/vendor/pastwork/previewupload/previewupload.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthWedService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], PreviewuploadComponent);
    return PreviewuploadComponent;
}());



/***/ }),

/***/ "./src/app/vendor/policiesplan/policiesplan.component.css":
/*!****************************************************************!*\
  !*** ./src/app/vendor/policiesplan/policiesplan.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wb2xpY2llc3BsYW4vcG9saWNpZXNwbGFuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vendor/policiesplan/policiesplan.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/vendor/policiesplan/policiesplan.component.ts ***!
  \***************************************************************/
/*! exports provided: PoliciesplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliciesplanComponent", function() { return PoliciesplanComponent; });
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

var PoliciesplanComponent = /** @class */ (function () {
    function PoliciesplanComponent() {
    }
    PoliciesplanComponent.prototype.ngOnInit = function () {
    };
    PoliciesplanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-policiesplan',
            template: __webpack_require__(/*! raw-loader!./policiesplan.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/policiesplan/policiesplan.component.html"),
            styles: [__webpack_require__(/*! ./policiesplan.component.css */ "./src/app/vendor/policiesplan/policiesplan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PoliciesplanComponent);
    return PoliciesplanComponent;
}());



/***/ }),

/***/ "./src/app/vendor/profilepicture/profilepicture.component.css":
/*!********************************************************************!*\
  !*** ./src/app/vendor/profilepicture/profilepicture.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9wcm9maWxlcGljdHVyZS9wcm9maWxlcGljdHVyZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/profilepicture/profilepicture.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vendor/profilepicture/profilepicture.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfilepictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepictureComponent", function() { return ProfilepictureComponent; });
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

var ProfilepictureComponent = /** @class */ (function () {
    function ProfilepictureComponent() {
    }
    ProfilepictureComponent.prototype.ngOnInit = function () {
    };
    ProfilepictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profilepicture',
            template: __webpack_require__(/*! raw-loader!./profilepicture.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/profilepicture/profilepicture.component.html"),
            styles: [__webpack_require__(/*! ./profilepicture.component.css */ "./src/app/vendor/profilepicture/profilepicture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfilepictureComponent);
    return ProfilepictureComponent;
}());



/***/ }),

/***/ "./src/app/vendor/servicepricing/servicepricing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/vendor/servicepricing/servicepricing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci9zZXJ2aWNlcHJpY2luZy9zZXJ2aWNlcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vendor/servicepricing/servicepricing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vendor/servicepricing/servicepricing.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServicepricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicepricingComponent", function() { return ServicepricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// export class subObjArea{
//   nameOfArea : String;
//   typeOfArea : String;
//   floatingCapacity : Number;
//   fixedCapacity : Number;
// }
var ServicepricingComponent = /** @class */ (function () {
    function ServicepricingComponent(formBuilder, auth) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.checkOtherFlag = false;
        this.checkOtherYearFlag = false;
        this.photographyCost = {
            "Candid Photography": 0, "Traditional Photography": 0, "Cinematic Video": 0,
            "Traditional Video": 0, "Photo album": 0, "Pre-wedding Shoot": 0, "Shoot": 0,
            "Drone": 0, "Crane": 0, "Photobooth": 0,
        };
        this.photographyCostTemp = {
            "Candid Photography": 0, "Traditional Photography": 0, "Cinematic Video": 0,
            "Traditional Video": 0, "Photo album": 0, "Pre-wedding Shoot": 0, "Shoot": 0,
            "Drone": 0, "Crane": 0, "Photobooth": 0,
        };
        this.service_priest = {
            'Pre-wedding(Roka) puja/hawan': 0,
            'Sagan puja/hawan': 0,
            'wedding puja/hawan': 0,
            'Matching kundlis': 0,
            'Astrology': 0,
        };
        this.brideWearStartingPrice = {
            'bridalLehengas': 0,
            'lightLehengas': 0,
            'gowns': 0,
            'trousseauSarees': 0,
            'trousseauAnarkalis': 0,
            'indoWestern': 0,
            'christianWeddingGowns': 0,
        };
        this.groomWearStartingPrice = {
            'sherwani': 0,
            'weddingSuitsTuxes': 0,
            'kurtaPyjama': 0,
            'bandhgala': 0,
            'waistCoatsNehruJackets': 0,
            'indoWestern': 0,
            'pagadi': 0,
        };
        this.makeupPrice = {
            'regularMakeup': 0,
            'airbrushMakeup': 0,
            'guestMakeup': 0,
            'hairstyling': 0,
            'nailPaint': 0,
            'draping': 0,
            'mehendi': 0,
            'jewellery': 0
        };
        this.otherSpecifiedYear = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1800);
        this.makeService = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.placeHolder = {
            "Candid Photography": 'Price per day',
            "Traditional Photography": 'Price per day',
            "Cinematic Video": 'Price per day',
            "Traditional Video": 'Price per day',
            "Photo album": 'Price per album',
            "Pre-wedding Shoot": 'Price for photoshoot',
            "Shoot": '',
            "Drone": '',
            "Crane": '',
            "Photobooth": '',
        };
        this.chooseCoreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.startPricing = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.percentArr = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        this.brandname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
        this.introduction = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.workingSince = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.haveStudio = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.perVegPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.perNonVegPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.perDayPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // invitation
        this.boxedInvitesFlag = false;
        this.unboxedInvitesFlag = false;
        this.digitalECardsFlag = false;
        this.onlyCardDesignFlag = false;
        this.otherFlag = false;
        this.designingStartingPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        // caterer
        this.startingPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.catererContent = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.catererType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.speciality = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.standardVegInclude = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.minNumberCater = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.cuisinesOffered = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // == Bridal Designer == 
        this.brideWearCheckControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.groomWearCheckControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.brideWearSelectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.groomWearSelectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.yourOutfits = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.storeStudioStart = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.descrieEstablishment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.outfitsPickupDropPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // chooseTypeOfStore = new FormControl('',[Validators.required]);
        // readyToPurchaseOutfits = new FormControl('',[Validators.required]);
        // samplePiecesOnOrders = new FormControl('',[Validators.required]);
        // designedOutfitsFromScratch = new FormControl('',[Validators.required]);
        // bridalLehengas = new FormControl('',[Validators.required]);
        // lightLehengas = new FormControl('',[Validators.required]);
        // growns = new FormControl('',[Validators.required]);
        // anarkalisSuits = new FormControl('',[Validators.required]);
        // sareers = new FormControl('',[Validators.required]);
        // indoWestern = new FormControl('',[Validators.required]);
        // == Markeup ==
        this.otherWorkLocation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''); // video, palnner, decorator,photographer, cho, mark,mehndi
        this.travelToClientVenue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.travelMarkeupCharges = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.brandsUsed = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //decorator
        // bandb
        this.packageIncluded = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''); // video, mehndi, photographer
        this.noHours = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.brassBand = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.packageInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.transportationChargesIncluded = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.wilingToTravel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.baseLocationWhereBusinessLocated = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.experiencedHave = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.readyToTravelKM = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // travel honeymoon
        this.withinIndia = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.internationalTravel = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.baseLocationProvidingService = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.popularHoneymoonDestination = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.holidayCompany = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.helpCoubleBook = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mentionOtherService = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.howManyYearsAdvanceReach = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.awardsRecognitionPublications = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // PriestPandit
        this.preWeddingRokaPujaHawan = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.saganPujaHawan = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.weddingPujaHawan = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.matchingKundlis = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.astrology = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.serviceOfferPriestControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.languagesKnow = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.serviceArea = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // PriestPandit
        // == Choreographer ==
        this.travelOtherIndianCities = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''); // video, mehndi, photographer
        // packagePricing = new FormControl('',[Validators.required]);
        // provideBackupDancers = new FormControl('',[Validators.required]);
        this.favouriteMusicGenres = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.regularlyPlayClub = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.popularWorkAward = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.startingPriceInclude = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        //  == Mehndi Artist ==
        this.bridalMehndiPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.familyMehndiPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        //  == photographer ==
        this.travelCostControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.servicePhotography = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.candidPhotography = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.traditionalPhotography = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.cinematicVideo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.traditionalVideo = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.photoAlbum = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.preWeddingShoot = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.drone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.crane = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        this.photobooth = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]); //video
        // == Venue == 
        this.propertyType = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        // chargeWay= new FormControl('',[Validators.required]);
        this.nameOfArea = [];
        this.typeOfArea = [];
        this.floatingCapacity = [];
        this.fixedCapacity = [];
        // arrArea:Array<subObjArea>= [];
        // new
        this.maximumGuestCapacity = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.noRoomsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.noCarsParkedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.peymentDeliveryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.paymentEventDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.advanceBookingControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.cancellationPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('No charge for cancellation');
        this.cancelPercentControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.trialPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Free visit available');
        this.outsideDJ = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.outsideAlcohol = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // end new
        this.roomsAvaliable = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.foodProvidedByVenue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.outsideCatererAllowed = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // fixedDecorationAvailable = new FormControl('');
        // decoratorsOnPanel= new FormControl('');
        // outsideDecoratorAllowed = new FormControl('');
        this.decorationPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.DJPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.alcoholPolicy = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.electricityBackup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.airConditioned = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.restaurant = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.bar = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.conferenceCenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.wifi = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.spa = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.valletParking = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.bridalRoom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.airportPickupDrop = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.conciergeServices = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.pool = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.parking = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // foodProvidedByVenue:boolean = false;
        // outsideCatererAllowed :boolean = false;
        // fixedDecorationAvailable :boolean = false;
        // decoratorsOnPanel:boolean = false;
        // outsideDecoratorAllowed :boolean = false;
        // DJPolicy :boolean = false;
        // alcoholPolicy:boolean = false;
        // electricityBackup :boolean = false;
        // airConditioned:boolean = false;
        // restaurant :boolean = false;
        // bar :boolean = false;
        // conferenceCenter :boolean = false;
        // wifi :boolean = false;
        // spa :boolean = false;
        // valletParking:boolean = false;
        // bridalRoom :boolean = false;
        // airportPickupDrop :boolean = false;
        // conciergeServices:boolean = false;
        // pool :boolean = false;
        // parking :boolean = false;
        // parkingFacility = new FormControl('',[Validators.required]);
        this.parkingFacility = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        // == wedding decorator ==
        this.onPanelOfVenue = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.indoorDecorStartingPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.outdoorDecorStartingPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.decorProvidedFor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.otherServices = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.flowers = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.bannerPrints = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.audioVisuals = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.decorativeDraping = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.eventConcertDesign = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.lighting = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.sounds = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.furnitureRental = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mandap = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.carDecoration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.fireworks = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.tents = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.giftWrapping = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.homeDecoration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.centerpiece = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.entrances = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.tableDecoration = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // others = new FormControl('');
        // == wedding invitation ==
        this.boxedInvites = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.unboxedInvites = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.digitalECards = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.onlyCardDesign = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // other = new FormControl('');
        this.experienceHave = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.invitationSpeciality = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.shipInvities = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.boxedMinPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.boxedMaxPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.boxedMinCards = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.unboxedMinPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.unboxedMaxPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.unboxedMinCards = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.other = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.ecardStartingPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0);
        this.otherInvitation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        // traditionalInvitations = new FormControl('');
        // funkyOfbeatInvitations = new FormControl('');
        // handmadeCards = new FormControl('');
        // modernInvites = new FormControl('');
        // boxedInvitations = new FormControl('');
        // weddingStationery = new FormControl('');
        // others = new FormControl('');
        // noShipping = new FormControl('');
        // domesticShipping = new FormControl('');
        // internationalShipping = new FormControl('');
        // == wedding planner ==
        this.citiesPlannedWeddingIn = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.destinationWedding = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.startingPackagePrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''); //bandb
        this.packageDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.typeOfPlanningOffer = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.trousseauPreperations = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.DJMusic = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.venueBooking = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.decor = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.photographyServices = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.honeymoon = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.serviceStaff = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.invitations = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.catering = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.PRMediaCoverage = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.gifts = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.celebrityInvites = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.serviceOfferedSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.inHouseService = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.withinIndiaFlag = false;
        this.internationalTravelFlag = false;
        this.regularlyPlayClubFlag = false;
        console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(localStorage.getItem('current_vendor'));
        console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
        this.currentVendor = JSON.parse(localStorage.getItem('current_vendor'));
        if (this.auth.cities.length == 0) {
            this.auth.getCities().subscribe(function (res) {
                _this.cities = res;
            });
        }
        else {
            this.cities = this.auth.cities;
        }
    }
    ServicepricingComponent.prototype.addArea = function () {
        // this.typeOfArea.push(new FormControl(''))
        // this.nameOfArea.push(new FormControl(''))
        // this.fixedCapacity.push(new FormControl(''))
        // this.floatingCapacity.push(new FormControl(''))
        // this.arrArea.push({nameOfArea:'',typeOfArea:'',fixedCapacity:0,floatingCapacity:0})
        this.typeOfArea.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
        this.nameOfArea.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''));
        this.fixedCapacity.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0));
        this.floatingCapacity.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0));
    };
    ServicepricingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentVendor.costPer)
            this.costPerControl = this.currentVendor.costPer;
        if (this.currentVendor.perDayRentPrice) {
            this.perDayPrice.setValue(this.currentVendor.perDayRentPrice);
        }
        if (this.currentVendor.perNonVegPlatePrice)
            this.perNonVegPrice.setValue(this.currentVendor.perNonVegPlatePrice);
        if (this.currentVendor.perVegPlatePrice)
            this.perVegPrice.setValue(this.currentVendor.perVegPlatePrice);
        if (this.currentVendor.paymentOnDelivery)
            this.peymentDeliveryControl.setValue(this.currentVendor.paymentOnDelivery);
        if (this.currentVendor.paymentOnEventDate)
            this.paymentEventDateControl.setValue(this.currentVendor.paymentOnEventDate);
        if (this.currentVendor.advanceForBooking)
            this.advanceBookingControl.setValue(this.currentVendor.advanceForBooking);
        if (this.currentVendor.maxmiumGuests)
            this.maximumGuestCapacity.setValue(this.currentVendor.maxmiumGuests);
        if (this.currentVendor.trialPolicy)
            this.trialPolicy.setValue(this.currentVendor.trialPolicy);
        if (this.currentVendor.cancellationPolicy)
            this.cancellationPolicy.setValue(this.currentVendor.cancellationPolicy);
        if (this.currentVendor.cancellationPolicy)
            this.cancelPercentControl.setValue(this.currentVendor.chargeCancellation);
        // this.typeOfArea.push(new FormControl(''))
        // this.nameOfArea.push(new FormControl(''))
        // this.fixedCapacity.push(new FormControl(''))
        // this.floatingCapacity.push(new FormControl(''))
        if (this.currentVendor.type == 'BandBajaGhodiwala') {
            if (this.currentVendor.startingPackagePrice)
                this.startingPackagePrice.setValue(this.currentVendor.startingPackagePrice);
            if (this.currentVendor.packageIncluded && this.currentVendor.packageIncluded.noHours)
                this.noHours.setValue(this.currentVendor.packageIncluded.noHours);
            if (this.currentVendor.packageIncluded && this.currentVendor.packageIncluded.brassBand)
                this.brassBand.setValue(this.currentVendor.packageIncluded.brassBand);
            if (this.currentVendor.packageIncluded && this.currentVendor.packageIncluded.packageInfo)
                this.packageInfo.setValue(this.currentVendor.packageIncluded.packageInfo);
            if (this.currentVendor.packageIncluded && this.currentVendor.packageIncluded.transportationChargesIncluded)
                this.transportationChargesIncluded.setValue(this.currentVendor.packageIncluded.transportationChargesIncluded);
            if (this.currentVendor.experiencedHave)
                this.experiencedHave.setValue(this.currentVendor.experiencedHave);
            if (this.currentVendor.baseLocationWhereBusinessLocated)
                this.baseLocationWhereBusinessLocated.setValue(this.currentVendor.baseLocationWhereBusinessLocated);
            if (this.currentVendor.wilingToTravel)
                this.wilingToTravel.setValue(this.currentVendor.wilingToTravel);
            if (this.currentVendor.readyToTravelKM)
                this.readyToTravelKM.setValue(this.currentVendor.readyToTravelKM);
            if (this.currentVendor.travelCost)
                this.travelCostControl.setValue(this.currentVendor.travelCost);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                startingPackagePrice: this.startingPackagePrice,
                noHours: this.noHours,
                brassBand: this.brassBand,
                transportationChargesIncluded: this.transportationChargesIncluded,
                packageInfo: this.packageInfo,
                experiencedHave: this.experiencedHave,
                wilingToTravel: this.wilingToTravel,
                readyToTravelKM: this.readyToTravelKM,
                travelCostControl: this.travelCostControl,
                type: this.currentVendor.type,
                baseLocationWhereBusinessLocated: this.baseLocationWhereBusinessLocated,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                modifiedBy: this.currentVendor.brandname,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        if (this.currentVendor.type == 'BridalDesigner') {
            if (this.currentVendor.yourOutfits)
                this.yourOutfits.setValue(this.currentVendor.yourOutfits);
            if (this.currentVendor.storeStudioStart)
                this.storeStudioStart.setValue(this.currentVendor.storeStudioStart);
            if (this.currentVendor.descrieEstablishment)
                this.descrieEstablishment.setValue(this.currentVendor.descrieEstablishment);
            if (this.currentVendor.outfitsPickupDropPolicy)
                this.outfitsPickupDropPolicy.setValue(this.currentVendor.outfitsPickupDropPolicy);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                yourOutfits: this.yourOutfits,
                bridalLehengas: this.brideWearStartingPrice['bridalLehengas'],
                lightLehengas: this.brideWearStartingPrice['lightLehengas'],
                gowns: this.brideWearStartingPrice['gowns'],
                trousseauSarees: this.brideWearStartingPrice['trousseauSarees'],
                trousseauAnarkalis: this.brideWearStartingPrice['trousseauAnarkalis'],
                indoWestern: this.brideWearStartingPrice['indoWestern'],
                christianWeddingGowns: this.brideWearStartingPrice['christianWeddingGowns'],
                modifiedBy: this.currentVendor.brandname,
                sherwani: this.groomWearStartingPrice['sherwani'],
                weddingSuitsTuxes: this.groomWearStartingPrice['weddingSuitsTuxes'],
                kurtaPyjama: this.groomWearStartingPrice['kurtaPyjama'],
                bandhgala: this.groomWearStartingPrice['bandhgala'],
                waistCoatsNehruJackets: this.groomWearStartingPrice['waistCoatsNehruJackets'],
                indoWesternGroom: this.groomWearStartingPrice['ndoWestern'],
                pagadi: this.groomWearStartingPrice['pagadi'],
                storeStudioStart: this.storeStudioStart.value,
                descrieEstablishment: this.descrieEstablishment.value,
                outfitsPickupDropPolicy: this.outfitsPickupDropPolicy.value,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
            console.log('++++++++++++');
            console.log(this.serviceForm.value);
            console.log('++++++++++++');
            // if(this.currentVendor.otherWorkLocation)
            //   this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation)
            //   if(this.currentVendor.travelOtherIndianCities)
            //   this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities)
            //   if(this.currentVendor.chooseTypeOfStore)
            //   this.chooseTypeOfStore.setValue(this.currentVendor.chooseTypeOfStore)
            //   if(this.currentVendor.speciality){
            //     if(this.currentVendor.speciality.readyToPurchaseOutfits)
            //     this.readyToPurchaseOutfits.setValue(this.currentVendor.speciality.readyToPurchaseOutfits)
            //     if(this.currentVendor.speciality.designedOutfitsFromScratch)
            //       this.designedOutfitsFromScratch.setValue(this.currentVendor.speciality.designedOutfitsFromScratch)
            //     if(this.currentVendor.speciality.samplePiecesOnOrders)
            //       this.samplePiecesOnOrders.setValue(this.currentVendor.speciality.samplePiecesOnOrders)
            //   }
            //   if(this.currentVendor.outfitsOffer){
            //     if(this.currentVendor.outfitsOffer.bridalLehengas)
            //     this.bridalLehengas.setValue(this.currentVendor.outfitsOffer.bridalLehengas)
            //   if(this.currentVendor.outfitsOffer.lightLehengas)
            //     this.lightLehengas.setValue(this.currentVendor.outfitsOffer.lightLehengas)
            //   if(this.currentVendor.outfitsOffer.growns)
            //     this.growns.setValue(this.currentVendor.outfitsOffer.growns)
            //   if(this.currentVendor.outfitsOffer.anarkalisSuits)
            //     this.anarkalisSuits.setValue(this.currentVendor.outfitsOffer.anarkalisSuits)
            //   if(this.currentVendor.outfitsOffer.sareers)
            //     this.sareers.setValue(this.currentVendor.outfitsOffer.sareers)
            //   if(this.currentVendor.outfitsOffer.indoWestern)
            //     this.indoWestern.setValue(this.currentVendor.outfitsOffer.indoWestern)
            //   }
            //   this.serviceForm = this.formBuilder.group({
            //     _id:this.currentVendor._id,
            // otherWorkLocation: this.otherWorkLocation,//a
            // travelOtherIndianCities:this.travelOtherIndianCities,//s
            // chooseTypeOfStore: this.chooseTypeOfStore,
            //     readyToPurchaseOutfits:this.readyToPurchaseOutfits,
            //     designedOutfitsFromScratch:this.designedOutfitsFromScratch,
            //     samplePiecesOnOrders:this.samplePiecesOnOrders,
            //     bridalLehengas:this.bridalLehengas,
            //     lightLehengas:this.lightLehengas,
            //     growns:this.growns,
            //     anarkalisSuits:this.anarkalisSuits,
            //     sareers:this.sareers,
            //     indoWestern:this.indoWestern,
            //     type:this.currentVendor.type,
            //     servicePricingStatus:true
            //   }); 
        }
        if (this.currentVendor.type == 'BridalMakeupArtist') {
            if (this.currentVendor.otherWorkLocation)
                this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation);
            if (this.currentVendor.travelOtherIndianCities)
                this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities);
            if (this.currentVendor.haveStudio)
                this.haveStudio.setValue(this.currentVendor.haveStudio);
            // if(this.currentVendor.chooseTypeOfStore)
            // this.chooseTypeOfStore.setValue(this.currentVendor.chooseTypeOfStore)
            // if(this.currentVendor.serviceOffered){
            //   if(this.currentVendor.serviceOffered.regularMakeup)
            //   this.regularMakeup.setValue(this.currentVendor.serviceOffered.regularMakeup)
            //   if(this.currentVendor.serviceOffered.guestMakeup)
            //   this.guestMakeup.setValue(this.currentVendor.serviceOffered.guestMakeup)
            //   if(this.currentVendor.serviceOffered.hairstyling)
            //   this.hairstyling.setValue(this.currentVendor.serviceOffered.hairstyling)
            //   if(this.currentVendor.serviceOffered.nailPaint)
            //   this.nailPaint.setValue(this.currentVendor.serviceOffered.nailPaint)
            //   if(this.currentVendor.serviceOffered.draping)
            //   this.draping.setValue(this.currentVendor.serviceOffered.draping)
            //   if(this.currentVendor.serviceOffered.mehendi)
            //   this.mehendi.setValue(this.currentVendor.serviceOffered.mehendi)
            //   if(this.currentVendor.serviceOffered.jewellery)
            //   this.jewellery.setValue(this.currentVendor.serviceOffered.jewellery)
            // }
            if (this.currentVendor.travelToClientVenue)
                this.travelToClientVenue.setValue(this.currentVendor.travelToClientVenue);
            if (this.currentVendor.travelMarkeupCharges)
                this.travelMarkeupCharges.setValue(this.currentVendor.travelMarkeupCharges);
            if (this.currentVendor.brandsUsed)
                this.brandsUsed.setValue(this.currentVendor.brandsUsed);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                // travelOtherIndianCities:this.travelOtherIndianCities,//s
                haveStudio: this.haveStudio,
                modifiedBy: this.currentVendor.brandname,
                regularMakeup: this.makeupPrice['regularMakeup'],
                guestMakeup: this.makeupPrice['guestMakeup'],
                hairstyling: this.makeupPrice['hairstyling'],
                nailPaint: this.makeupPrice['nailPaint'],
                draping: this.makeupPrice['draping'],
                mehendi: this.makeupPrice['mehendi'],
                jewellery: this.makeupPrice['jewellery'],
                travelToClientVenue: this.travelToClientVenue,
                travelMarkeupCharges: this.travelMarkeupCharges,
                brandsUsed: this.brandsUsed,
                travelcost: this.travelCostControl,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        if (this.currentVendor.type == 'Caterer') {
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            if (this.currentVendor.catererContent)
                this.catererContent.setValue(this.currentVendor.catererContent);
            if (this.currentVendor.catererType)
                this.catererType.setValue(this.currentVendor.catererType);
            if (this.currentVendor.cuisinesOffered)
                this.cuisinesOffered.setValue(this.currentVendor.cuisinesOffered);
            if (this.currentVendor.speciality)
                this.speciality.setValue(this.currentVendor.speciality);
            if (this.currentVendor.standardVegInclude)
                this.standardVegInclude.setValue(this.currentVendor.standardVegInclude);
            if (this.currentVendor.minNumberCater)
                this.minNumberCater.setValue(this.currentVendor.minNumberCater);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                haveStudio: this.haveStudio,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                startingPrice: this.startPricing,
                catererContent: this.catererContent,
                catererType: this.catererType,
                cuisinesOffered: this.cuisinesOffered,
                speciality: this.speciality,
                modifiedBy: this.currentVendor.brandname,
                standardVegInclude: this.standardVegInclude,
                minNumberCater: this.minNumberCater
            });
        }
        if (this.currentVendor.type == 'PriestPandit') {
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            // if(this.currentVendor.serviceOffered && this.currentVendor.serviceOffered.preWeddingRokaPujaHawan)
            // this.preWeddingRokaPujaHawan.setValue(this.currentVendor.serviceOffered.preWeddingRokaPujaHawan)
            // if(this.currentVendor.serviceOffered && this.currentVendor.serviceOffered.saganPujaHawan)
            // this.saganPujaHawan.setValue(this.currentVendor.serviceOffered.saganPujaHawan)
            // if(this.currentVendor.serviceOffered && this.currentVendor.serviceOffered.weddingPujaHawan)
            // this.weddingPujaHawan.setValue(this.currentVendor.serviceOffered.weddingPujaHawan)
            // if(this.currentVendor.serviceOffered && this.currentVendor.serviceOffered.matchingKundlis)
            // this.matchingKundlis.setValue(this.currentVendor.serviceOffered.matchingKundlis)
            // if(this.currentVendor.serviceOffered && this.currentVendor.serviceOffered.astrology)
            // this.astrology.setValue(this.currentVendor.serviceOffered.astrology)
            if (this.currentVendor.samagriIncluded)
                this.samagriIncluded = this.currentVendor.samagriIncluded;
            if (this.currentVendor.languagesKnow)
                this.languagesKnow.setValue(this.currentVendor.languagesKnow);
            if (this.currentVendor.experiencedHave)
                this.experiencedHave.setValue(this.currentVendor.experiencedHave);
            if (this.currentVendor.serviceArea)
                this.serviceArea.setValue(this.currentVendor.serviceArea);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                startingPrice: this.startingPrice,
                // preWeddingRokaPujaHawan:this.preWeddingRokaPujaHawan,
                // saganPujaHawan:this.saganPujaHawan,
                // weddingPujaHawan:this.weddingPujaHawan,
                // matchingKundlis:this.matchingKundlis,
                // astrology:this.astrology,
                preWeddingRokaPujaHawan: this.service_priest['Pre-wedding(Roka) puja/hawan'],
                saganPujaHawan: this.service_priest['Sagan puja/hawan'],
                weddingPujaHawan: this.service_priest['wedding puja/hawan'],
                matchingKundlis: this.service_priest['Matching kundlis'],
                astrology: this.service_priest['Astrology'],
                samagriIncluded: this.samagriIncluded,
                languagesKnow: this.languagesKnow,
                experiencedHave: this.experiencedHave,
                serviceArea: this.serviceArea,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                modifiedBy: this.currentVendor.brandname,
            });
        }
        if (this.currentVendor.type == 'TravelHoneymoon') {
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            if (this.currentVendor.withinIndia && this.currentVendor.withinIndia != 0) {
                this.withinIndia.setValue(this.currentVendor.withinIndia);
                this.withinIndiaFlag = false;
            }
            if (this.currentVendor.internationalTravel && this.currentVendor.internationalTravel != 0) {
                this.internationalTravel.setValue(this.currentVendor.internationalTravel);
                this.withinIndiaFlag = true;
            }
            if (this.currentVendor.baseLocationProvidingService)
                this.baseLocationProvidingService.setValue(this.currentVendor.baseLocationProvidingService);
            if (this.currentVendor.popularHoneymoonDestination)
                this.popularHoneymoonDestination.setValue(this.currentVendor.popularHoneymoonDestination);
            if (this.currentVendor.holidayCompany)
                this.holidayCompany.setValue(this.currentVendor.holidayCompany);
            if (this.currentVendor.helpCoubleBook)
                this.helpCoubleBook.setValue(this.currentVendor.helpCoubleBook);
            if (this.currentVendor.mentionOtherService)
                this.mentionOtherService.setValue(this.currentVendor.mentionOtherService);
            if (this.currentVendor.howManyYearsAdvanceReach)
                this.howManyYearsAdvanceReach.setValue(this.currentVendor.howManyYearsAdvanceReach);
            if (this.currentVendor.experiencedHave)
                this.experienceHave.setValue(this.currentVendor.experiencedHave);
            if (this.currentVendor.awardsRecognitionPublications)
                this.awardsRecognitionPublications.setValue(this.currentVendor.awardsRecognitionPublications);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                startingPrice: this.startingPrice,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                withinIndia: this.withinIndia,
                internationalTravel: this.internationalTravel,
                baseLocationProvidingService: this.baseLocationProvidingService,
                popularHoneymoonDestination: this.popularHoneymoonDestination,
                holidayCompany: this.holidayCompany,
                helpCoubleBook: this.helpCoubleBook,
                mentionOtherService: this.mentionOtherService,
                howManyYearsAdvanceReach: this.howManyYearsAdvanceReach,
                experiencedHave: this.experiencedHave,
                awardsRecognitionPublications: this.awardsRecognitionPublications,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                modifiedBy: this.currentVendor.brandname,
                paymentOnDelivery: this.peymentDeliveryControl,
            });
        }
        if (this.currentVendor.type == 'Choreographer') {
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            if (this.currentVendor.startingPriceInclude)
                this.startingPriceInclude.setValue(this.currentVendor.startingPriceInclude);
            if (this.currentVendor.favouriteMusicGenres)
                this.favouriteMusicGenres.setValue(this.currentVendor.favouriteMusicGenres);
            if (this.currentVendor.otherWorkLocation)
                this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation);
            if (this.currentVendor.regularlyPlayClub)
                this.regularlyPlayClub.setValue(this.currentVendor.regularlyPlayClub);
            if (this.currentVendor.experiencedHave)
                this.experiencedHave.setValue(this.currentVendor.experiencedHave);
            if (this.currentVendor.popularWorkAward)
                this.popularWorkAward.setValue(this.currentVendor.popularWorkAward);
            if (!this.costPerControl)
                this.perDayPrice.setValue(0);
            else {
                this.perNonVegPrice.setValue(0);
                this.perVegPrice.setValue(0);
            }
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                modifiedBy: this.currentVendor.brandname,
                startingPrice: this.startingPrice,
                costPer: this.costPerControl,
                startingPriceInclude: this.startingPriceInclude,
                favouriteMusicGenres: this.favouriteMusicGenres,
                experiencedHave: this.experiencedHave,
                popularWorkAward: this.popularWorkAward,
                regularlyPlayClub: this.regularlyPlayClub
            });
        }
        if (this.currentVendor.type == 'MehndiArtist') {
            if (this.currentVendor.otherWorkLocation)
                this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation);
            if (this.currentVendor.familyMehndiPrice)
                this.familyMehndiPrice.setValue(this.currentVendor.familyMehndiPrice);
            if (this.currentVendor.travelOtherIndianCities)
                this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities);
            if (this.currentVendor.bridalMehndiPrice)
                this.bridalMehndiPrice.setValue(this.currentVendor.bridalMehndiPrice);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                travelCost: this.travelCostControl,
                bridalMehndiPrice: this.bridalMehndiPrice,
                familyMehndiPrice: this.familyMehndiPrice,
                type: this.currentVendor.type,
                modifiedBy: this.currentVendor.brandname,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        if (this.currentVendor.type === 'Photographer') {
            if (this.currentVendor.otherWorkLocation)
                this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation);
            if (this.currentVendor.travelOtherIndianCities)
                this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities);
            if (this.currentVendor.serviceOffered) {
                if (this.currentVendor.serviceOffered.cinematicVideo)
                    this.cinematicVideo.setValue(this.currentVendor.serviceOffered.cinematicVideo);
                if (this.currentVendor.serviceOffered.traditionalVideo)
                    this.traditionalVideo.setValue(this.currentVendor.serviceOffered.traditionalVideo);
                if (this.currentVendor.serviceOffered.photoAlbum)
                    this.photoAlbum.setValue(this.currentVendor.serviceOffered.photoAlbum);
                if (this.currentVendor.serviceOffered.preWeddingShoot)
                    this.preWeddingShoot.setValue(this.currentVendor.serviceOffered.preWeddingShoot);
                if (this.currentVendor.serviceOffered.drone)
                    this.drone.setValue(this.currentVendor.serviceOffered.drone);
                if (this.currentVendor.serviceOffered.crane)
                    this.crane.setValue(this.currentVendor.serviceOffered.crane);
                if (this.currentVendor.serviceOffered.photobooth)
                    this.photobooth.setValue(this.currentVendor.serviceOffered.photobooth);
                if (this.currentVendor.serviceOffered.candidPhotography)
                    this.candidPhotography.setValue(this.currentVendor.serviceOffered.candidPhotography);
                if (this.currentVendor.serviceOffered.traditionalPhotography)
                    this.traditionalPhotography.setValue(this.currentVendor.serviceOffered.traditionalPhotography);
            }
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                travelCost: this.travelCostControl,
                modifiedBy: this.currentVendor.brandname,
                traditionalPhotography: this.photographyCost['Traditional Photography'],
                cinematicVideo: this.photographyCost['Cinematic Video'],
                traditionalVideo: this.photographyCost['Traditional Video'],
                photoAlbum: this.photographyCost['Photo album'],
                preWeddingShoot: this.photographyCost['Pre-wedding Shoot'],
                drone: this.photographyCost['Drone'],
                crane: this.photographyCost['Crane'],
                photobooth: this.photographyCost['Photobooth'],
                candidPhotography: this.photographyCost['Candid Photography'],
                type: this.currentVendor.type,
                servicePricingStatus: true
                // brandname: this.brandname,
                // introduction:this.introduction,
                // workingSince:this.workingSince
            });
        }
        if (this.currentVendor.type == 'WeddingDecorator') {
            // if(this.currentVendor.otherWorkLocation)
            // this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation)
            // if(this.currentVendor.travelOtherIndianCities)
            // this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities)
            // if(this.currentVendor.onPanelOfVenue)
            // this.onPanelOfVenue.setValue(this.currentVendor.onPanelOfVenue)
            // if(this.currentVendor.chooseCoreSpecialities){
            //    if(this.currentVendor.chooseCoreSpecialities.flowers)
            //     this.flowers.setValue(this.currentVendor.chooseCoreSpecialities.flowers)
            //   if(this.currentVendor.chooseCoreSpecialities.bannerPrints)
            //       this.bannerPrints.setValue(this.currentVendor.chooseCoreSpecialities.bannerPrints)
            //   if(this.currentVendor.chooseCoreSpecialities.audioVisuals)
            //      this.audioVisuals.setValue(this.currentVendor.chooseCoreSpecialities.audioVisuals)
            //   if(this.currentVendor.chooseCoreSpecialities.decorativeDraping)
            //      this.decorativeDraping.setValue(this.currentVendor.chooseCoreSpecialities.decorativeDraping)
            //   if(this.currentVendor.chooseCoreSpecialities.eventConcertDesign)
            //       this.eventConcertDesign.setValue(this.currentVendor.chooseCoreSpecialities.eventConcertDesign)
            //   if(this.currentVendor.chooseCoreSpecialities.lighting)
            //       this.lighting.setValue(this.currentVendor.chooseCoreSpecialities.lighting)
            //   if(this.currentVendor.chooseCoreSpecialities.sounds)
            //       this.sounds.setValue(this.currentVendor.chooseCoreSpecialities.sounds)
            //   if(this.currentVendor.chooseCoreSpecialities.furnitureRental)
            //      this.furnitureRental.setValue(this.currentVendor.chooseCoreSpecialities.furnitureRental)
            //   if(this.currentVendor.chooseCoreSpecialities.mandap)
            //       this.mandap.setValue(this.currentVendor.chooseCoreSpecialities.mandap)
            //   if(this.currentVendor.chooseCoreSpecialities.carDecoration)
            //       this.carDecoration.setValue(this.currentVendor.chooseCoreSpecialities.carDecoration)
            //   if(this.currentVendor.chooseCoreSpecialities.fireworks)
            //       this.fireworks.setValue(this.currentVendor.chooseCoreSpecialities.fireworks)
            //   if(this.currentVendor.chooseCoreSpecialities.tents)
            //       this.tents.setValue(this.currentVendor.chooseCoreSpecialities.tents)
            //   if(this.currentVendor.chooseCoreSpecialities.giftWrapping)
            //       this.giftWrapping.setValue(this.currentVendor.chooseCoreSpecialities.giftWrapping)
            //   if(this.currentVendor.chooseCoreSpecialities.homeDecoration)
            //       this.homeDecoration.setValue(this.currentVendor.chooseCoreSpecialities.homeDecoration)
            //   if(this.currentVendor.chooseCoreSpecialities.centerpiece)
            //       this.centerpiece.setValue(this.currentVendor.chooseCoreSpecialities.centerpiece)
            //   if(this.currentVendor.chooseCoreSpecialities.tableDecoration)
            //       this.tableDecoration.setValue(this.currentVendor.chooseCoreSpecialities.tableDecoration)
            //   if(this.currentVendor.chooseCoreSpecialities.entrances)
            //      this.entrances.setValue(this.currentVendor.chooseCoreSpecialities.entrances)
            // }
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            if (this.currentVendor.indoorDecorStartingPrice)
                this.indoorDecorStartingPrice.setValue(this.currentVendor.indoorDecorStartingPrice);
            if (this.currentVendor.outdoorDecorStartingPrice)
                this.outdoorDecorStartingPrice.setValue(this.currentVendor.outdoorDecorStartingPrice);
            if (this.currentVendor.decorProvidedFor)
                this.decorProvidedFor.setValue(this.currentVendor.decorProvidedFor);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                startingPrice: this.startingPrice,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                modifiedBy: this.currentVendor.brandname,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                indoorDecorStartingPricethis: this.indoorDecorStartingPrice,
                outdoorDecorStartingPrice: this.outdoorDecorStartingPrice,
                decorProvidedFor: this.decorProvidedFor,
                chooseCoreSpecialities: this.chooseCoreControl,
                otherServices: this.otherServices
            });
        }
        if (this.currentVendor.type == 'WeddingInvitation') {
            if (this.currentVendor.startingPrice)
                this.startingPrice.setValue(this.currentVendor.startingPrice);
            // if(this.currentVendor.serviceOffered.other)
            // this.other.setValue(this.currentVendor.serviceOffered.other)
            // if(this.currentVendor.serviceOffered){
            //   if(this.currentVendor.serviceOffered.boxedInvites)
            //   this.boxedInvites.setValue(this.currentVendor.serviceOffered.boxedInvites)
            //   if(this.currentVendor.serviceOffered.unboxedInvites)
            //   this.unboxedInvites.setValue(this.currentVendor.serviceOffered.unboxedInvites)
            //   if(this.currentVendor.serviceOffered.digitalECards)
            //   this.digitalECards.setValue(this.currentVendor.serviceOffered.digitalECards)
            //   if(this.currentVendor.serviceOffered.onlyCardDesign)
            //   this.onlyCardDesign.setValue(this.currentVendor.serviceOffered.onlyCardDesign)
            // }
            if (this.currentVendor.invitationSpeciality)
                this.invitationSpeciality.setValue(this.currentVendor.invitationSpeciality);
            if (this.currentVendor.shipInvities)
                this.shipInvities.setValue(this.currentVendor.shipInvities);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                boxedMaxPrice: this.boxedMaxPrice,
                boxedMinCards: this.boxedMinCards,
                boxedMinPrice: this.boxedMinPrice,
                unboxedMaxPrice: this.unboxedMaxPrice,
                unboxedMinCards: this.unboxedMinCards,
                unboxedMinPrice: this.unboxedMinPrice,
                ecardStartingPrice: this.ecardStartingPrice,
                modifiedBy: this.currentVendor.brandname,
                designingStartingPrice: this.designingStartingPrice,
                invitationSpeciality: this.invitationSpeciality,
                shipInvities: this.shipInvities,
                otherInvitation: this.other,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        if (this.currentVendor.type == 'WeddingPlanner') {
            this.otherWorkLocation.setValue(this.currentVendor.otherWorkLocation);
            if (this.currentVendor.travelOtherIndianCities)
                this.travelOtherIndianCities.setValue(this.currentVendor.travelOtherIndianCities);
            if (this.currentVendor.citiesPlannedWeddingIn)
                this.citiesPlannedWeddingIn.setValue(this.currentVendor.citiesPlannedWeddingIn);
            if (this.currentVendor.destinationWedding)
                this.destinationWedding.setValue(this.currentVendor.destinationWedding);
            if (this.currentVendor.startingPackagePrice)
                this.startingPackagePrice.setValue(this.currentVendor.startingPackagePrice);
            if (this.currentVendor.packageDetails)
                this.packageDetails.setValue(this.currentVendor.packageDetails);
            if (this.currentVendor.typeOfPlanningOffer)
                this.typeOfPlanningOffer.setValue(this.currentVendor.typeOfPlanningOffer);
            if (this.currentVendor.serviceOffered) {
                if (this.currentVendor.serviceOffered.trousseauPreperations)
                    this.trousseauPreperations.setValue(this.currentVendor.serviceOffered.trousseauPreperations);
                if (this.currentVendor.serviceOffered.DJMusic)
                    this.DJMusic.setValue(this.currentVendor.serviceOffered.DJMusic);
                if (this.currentVendor.serviceOffered.venueBooking)
                    this.venueBooking.setValue(this.currentVendor.serviceOffered.venueBooking);
                if (this.currentVendor.serviceOffered.decor)
                    this.decor.setValue(this.currentVendor.serviceOffered.decor);
                if (this.currentVendor.serviceOffered.photographyServices)
                    this.photographyServices.setValue(this.currentVendor.serviceOffered.photographyServices);
                if (this.currentVendor.serviceOffered.honeymoon)
                    this.honeymoon.setValue(this.currentVendor.serviceOffered.honeymoon);
                if (this.currentVendor.serviceOffered.serviceStaff)
                    this.serviceStaff.setValue(this.currentVendor.serviceOffered.serviceStaff);
                if (this.currentVendor.serviceOffered.invitations)
                    this.invitations.setValue(this.currentVendor.serviceOffered.invitations);
                if (this.currentVendor.serviceOffered.catering)
                    this.catering.setValue(this.currentVendor.serviceOffered.catering);
                if (this.currentVendor.serviceOffered.PRMediaCoverage)
                    this.PRMediaCoverage.setValue(this.currentVendor.serviceOffered.PRMediaCoverage);
                if (this.currentVendor.serviceOffered.gifts)
                    this.gifts.setValue(this.currentVendor.serviceOffered.gifts);
                if (this.currentVendor.serviceOffered.celebrityInvites)
                    this.celebrityInvites.setValue(this.currentVendor.serviceOffered.celebrityInvites);
            }
            if (this.currentVendor.inHouseService)
                this.inHouseService.setValue(this.currentVendor.inHouseService);
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                citiesPlannedWeddingIn: this.citiesPlannedWeddingIn,
                destinationWedding: this.destinationWedding,
                startingPackagePrice: this.startingPackagePrice,
                packageDetails: this.packageDetails,
                modifiedBy: this.currentVendor.brandname,
                typeOfPlanningOffer: this.typeOfPlanningOffer,
                // trousseauPreperations: this.trousseauPreperations,
                // DJMusic: this.DJMusic,
                // venueBooking: this.venueBooking,
                // decor: this.decor,
                // photographyServices: this.photographyServices,
                // honeymoon: this.honeymoon,
                // serviceStaff: this.serviceStaff,
                // invitations: this.invitations,
                // catering: this.catering,
                // PRMediaCoverage: this.PRMediaCoverage,
                // gifts: this.gifts,
                // celebrityInvites: this.celebrityInvites,
                serviceOfferedSelect: this.serviceOfferedSelect,
                inHouseService: this.inHouseService,
                travelCost: this.travelCostControl,
                type: this.currentVendor.type,
                servicePricingStatus: true
            });
        }
        if (this.currentVendor.type == "Venue") {
            // this.arrArea.push(new subObjArea())
            this.nameOfArea = [];
            this.typeOfArea = [];
            this.fixedCapacity = [];
            this.floatingCapacity = [];
            this.addArea();
            console.log('............................');
            console.log(this.currentVendor.DJPolicy.inHouseDJAvailable);
            console.log('............................');
            if (this.currentVendor.propertyType) {
                this.propertyType.setValue(this.currentVendor.propertyType);
            }
            if (this.currentVendor.maxmiumGuests)
                this.maximumGuestCapacity.setValue(this.currentVendor.maxmiumGuests);
            if (this.currentVendor.roomsAvaliable)
                this.roomsAvaliable.setValue(this.currentVendor.roomsAvaliable);
            if (this.currentVendor.parkingFacility)
                this.parkingFacility.setValue(this.currentVendor.parkingFacility);
            if (this.currentVendor.DJPolicy && this.currentVendor.DJPolicy.inHouseDJAvailable)
                this.DJPolicy.setValue(this.currentVendor.DJPolicy.inHouseDJAvailable);
            if (this.currentVendor.DJPolicy && this.currentVendor.DJPolicy.outsideAllowed)
                this.outsideDJ.setValue(this.currentVendor.DJPolicy.outsideAllowed);
            if (this.currentVendor.alcoholPolicy && this.currentVendor.alcoholPolicy.inHouseAlcoholAvailable)
                this.alcoholPolicy.setValue(this.currentVendor.alcoholPolicy.inHouseAlcoholAvailable);
            if (this.currentVendor.alcoholPolicy && this.currentVendor.alcoholPolicy.outsideAllowed)
                this.outsideAlcohol.setValue(this.currentVendor.alcoholPolicy.outsideAllowed);
            if (this.currentVendor.foodPolicy && this.currentVendor.foodPolicy.inhouseCaterAvailable)
                this.foodProvidedByVenue.setValue(this.currentVendor.foodPolicy.inhouseCaterAvailable);
            if (this.currentVendor.foodPolicy && this.currentVendor.foodPolicy.outsideCatererAllowed)
                this.outsideCatererAllowed.setValue(this.currentVendor.foodPolicy.outsideCatererAllowed);
            // if(this.currentVendor.decorationPolicy && this.currentVendor.decorationPolicy.fixedDecorationAvailable)
            // this.fixedDecorationAvailable.setValue(this.currentVendor.decorationPolicy.fixedDecorationAvailable);
            // if(this.currentVendor.decorationPolicy && this.currentVendor.decorationPolicy.decoratorsOnPanel)
            //  this.decoratorsOnPanel.setValue(this.currentVendor.decorationPolicy.decoratorsOnPanel);
            // if(this.currentVendor.decorationPolicy && this.currentVendor.decorationPolicy.outsideDecoratorAllowed)
            // this.fixedDecorationAvailable.setValue(this.currentVendor.decorationPolicy.outsideDecoratorAllowed);
            // if(this.currentVendor.decorationPolicy){
            // }
            if (this.currentVendor.areaVenue && this.currentVendor.areaVenue.length > 0) {
                this.nameOfArea = [];
                this.typeOfArea = [];
                this.fixedCapacity = [];
                this.floatingCapacity = [];
                this.currentVendor.areaVenue.forEach(function (element) {
                    console.log('lskdjf;sadfj;asjf;asdjf');
                    console.log(element);
                    _this.nameOfArea.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](element.nameOfArea));
                    _this.typeOfArea.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](element.typeOfArea));
                    _this.fixedCapacity.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](element.fixedCapacity));
                    _this.floatingCapacity.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](element.floatingCapacity));
                });
            }
            // if(!this.costPerControl)
            //     this.perDayPrice.setValue(0);        
            //   else{
            //     this.perNonVegPrice.setValue(0);
            //     this.perVegPrice.setValue(0);
            //   }
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                propertyType: this.propertyType.value,
                perDayRentPrice: this.perDayPrice,
                costPer: this.costPerControl,
                perNonVegPlatePrice: this.perNonVegPrice,
                perVegPlatePrice: this.perVegPrice,
                // chargeWay: this.chargeWay,
                // areaVenue:this.arrArea,
                modifiedBy: this.currentVendor.brandname,
                nameOfArea: this.nameOfArea,
                typeOfArea: this.typeOfArea,
                floatingCapacity: this.floatingCapacity,
                fixedCapacity: this.fixedCapacity,
                roomsAvaliable: this.roomsAvaliable,
                maxmiumGuests: this.maximumGuestCapacity,
                foodProvidedByVenue: this.foodProvidedByVenue,
                outsideCatererAllowed: this.outsideCatererAllowed,
                fixedDecorationAvailable: false,
                decoratorsOnPanel: false,
                outsideDecoratorAllowed: false,
                // decorationPolicy:this.decorationPolicy,
                outsideDJAllowed: this.DJPolicy,
                inHouseDJAvailable: this.outsideDJ,
                inHouseAlcoholAvailable: this.alcoholPolicy,
                outsideAlcoholAllowed: this.outsideAlcohol,
                electricityBackup: this.electricityBackup,
                airConditioned: this.airConditioned,
                restaurant: this.restaurant,
                bar: this.bar,
                conferenceCenter: this.conferenceCenter,
                wifi: this.wifi,
                spa: this.spa.value,
                valletParking: this.valletParking,
                bridalRoom: this.bridalRoom,
                airportPickupDrop: this.airportPickupDrop,
                conciergeServices: this.conciergeServices,
                pool: this.pool,
                parking: this.parking,
                parkingFacility: this.parkingFacility,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
    };
    ServicepricingComponent.prototype.submit = function () {
        var _this = this;
        var tempVendor;
        tempVendor = JSON.parse(localStorage.getItem('current_vendor'));
        tempVendor.basicStatus.servicePricingStatus = true;
        if (tempVendor.type == 'Venue') {
            var tempName = [];
            var tempType = [];
            var tempFix = [];
            var tempFloat = [];
            for (var i = 0; i < this.nameOfArea.length; i++) {
                tempName[i] = this.nameOfArea[i].value;
                tempFix[i] = this.fixedCapacity[i].value;
                tempFloat[i] = this.floatingCapacity[i].value;
                tempType[i] = this.typeOfArea[i].value;
            }
            // this.serviceForm.setValue({nameOfArea:JSON.stringify(tempName)})
            // this.serviceForm.setValue({typeOfArea:JSON.stringify(tempType)})
            // this.serviceForm.setValue({floatingCapacity:JSON.stringify(tempFloat)})
            // this.serviceForm.setValue({fixedCapacity:JSON.stringify(tempFix)})  
            var tempFixedDecoration = false;
            var tempDecoratorsOnPanel = false;
            var tempOutsideDecoratorAllowed = false;
            console.log('==============');
            // console.log(this.decorationPolicy.value)
            // this.decorationPolicy.value.forEach(element => {
            //   if(element == 'Fixed Decoration Available')
            //     tempFixedDecoration = true;
            //   if(element == 'Decorators On Panel')
            //      tempDecoratorsOnPanel = true;
            //   if(element == 'Outside Decorator Allowed')
            //     tempOutsideDecoratorAllowed = true;
            // });
            if (this.decorationPolicy.value == 'Fixed Decoration Available')
                tempFixedDecoration = true;
            if (this.decorationPolicy.value == 'Decorators On Panel')
                tempDecoratorsOnPanel = true;
            if (this.decorationPolicy.value == 'Outside Decorator Allowed')
                tempOutsideDecoratorAllowed = true;
            // console.log(tempFixedDecoration)
            // console.log(tempDecoratorsOnPanel)
            // console.log(tempOutsideDecoratorAllowed)
            console.log('==============');
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                propertyType: this.propertyType.value,
                perDayRentPrice: this.perDayPrice,
                costPer: this.costPerControl,
                perNonVegPlatePrice: this.perNonVegPrice,
                perVegPlatePrice: this.perVegPrice,
                nameOfArea: JSON.stringify(tempName),
                typeOfArea: JSON.stringify(tempType),
                floatingCapacity: JSON.stringify(tempFloat),
                fixedCapacity: JSON.stringify(tempFix),
                roomsAvaliable: this.roomsAvaliable,
                foodProvidedByVenue: this.foodProvidedByVenue,
                modifiedBy: this.currentVendor.brandname,
                outsideCatererAllowed: this.outsideCatererAllowed,
                // fixedDecorationAvailable: this.fixedDecorationAvailable,
                // decoratorsOnPanel: this.decoratorsOnPanel,
                // outsideDecoratorAllowed: this.outsideDecoratorAllowed,
                fixedDecorationAvailable: tempFixedDecoration,
                decoratorsOnPanel: tempDecoratorsOnPanel,
                outsideDecoratorAllowed: tempOutsideDecoratorAllowed,
                // decorationPolicy:this.decorationPolicy,
                outsideDJAllowed: this.DJPolicy,
                inHouseDJAvailable: this.outsideDJ,
                inHouseAlcoholAvailable: this.alcoholPolicy,
                outsideAlcoholAllowed: this.outsideAlcohol,
                electricityBackup: this.electricityBackup,
                airConditioned: this.airConditioned,
                restaurant: this.restaurant,
                bar: this.bar,
                conferenceCenter: this.conferenceCenter,
                wifi: this.wifi,
                spa: this.spa.value,
                valletParking: this.valletParking,
                bridalRoom: this.bridalRoom,
                airportPickupDrop: this.airportPickupDrop,
                conciergeServices: this.conciergeServices,
                pool: this.pool,
                parking: this.parking,
                parkingFacility: this.parkingFacility,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        else if (tempVendor.type == 'Photographer') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                travelCost: this.travelCostControl,
                traditionalPhotography: this.photographyCost['Traditional Photography'],
                cinematicVideo: this.photographyCost['Cinematic Video'],
                traditionalVideo: this.photographyCost['Traditional Video'],
                photoAlbum: this.photographyCost['Photo album'],
                preWeddingShoot: this.photographyCost['Pre-wedding Shoot'],
                modifiedBy: this.currentVendor.brandname,
                drone: this.photographyCost['Drone'],
                crane: this.photographyCost['Crane'],
                photobooth: this.photographyCost['Photobooth'],
                candidPhotography: this.photographyCost['Candid Photography'],
                type: this.currentVendor.type,
                servicePricingStatus: true
                // brandname: this.brandname,
                // introduction:this.introduction,
                // workingSince:this.workingSince
            });
        }
        else if (tempVendor.type == 'BridalDesigner') {
            var tempGroomCheck = 'false', tempBrideCheck = 'false';
            if (this.brideWearCheckControl.value)
                tempBrideCheck = 'true';
            if (this.groomWearCheckControl.value)
                tempGroomCheck = 'true';
            var tempYear;
            if (this.checkOtherYearFlag)
                tempYear = this.otherSpecifiedYear.value;
            else
                tempYear = this.storeStudioStart.value;
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                brideWear: tempBrideCheck,
                groomWear: tempGroomCheck,
                yourOutfits: this.yourOutfits,
                modifiedBy: this.currentVendor.brandname,
                bridalLehengas: this.brideWearStartingPrice['bridalLehengas'],
                lightLehengas: this.brideWearStartingPrice['lightLehengas'],
                gowns: this.brideWearStartingPrice['gowns'],
                trousseauSarees: this.brideWearStartingPrice['trousseauSarees'],
                trousseauAnarkalis: this.brideWearStartingPrice['trousseauAnarkalis'],
                indoWestern: this.brideWearStartingPrice['indoWestern'],
                christianWeddingGowns: this.brideWearStartingPrice['christianWeddingGowns'],
                sherwani: this.groomWearStartingPrice['sherwani'],
                weddingSuitsTuxes: this.groomWearStartingPrice['weddingSuitsTuxes'],
                kurtaPyjama: this.groomWearStartingPrice['kurtaPyjama'],
                bandhgala: this.groomWearStartingPrice['bandhgala'],
                waistCoatsNehruJackets: this.groomWearStartingPrice['waistCoatsNehruJackets'],
                indoWesternGroom: this.groomWearStartingPrice['ndoWestern'],
                pagadi: this.groomWearStartingPrice['pagadi'],
                storeStudioStart: tempYear,
                descrieEstablishment: this.descrieEstablishment.value,
                outfitsPickupDropPolicy: this.outfitsPickupDropPolicy.value,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        else if (this.currentVendor.type == 'BandBajaGhodiwala') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                startingPackagePrice: this.startingPackagePrice,
                noHours: this.noHours,
                brassBand: this.brassBand,
                travelCost: this.travelCostControl,
                transportationChargesIncluded: this.transportationChargesIncluded,
                packageInfo: this.packageInfo,
                modifiedBy: this.currentVendor.brandname,
                experiencedHave: this.experiencedHave,
                wilingToTravel: this.wilingToTravel,
                readyToTravelKM: this.readyToTravelKM,
                travelCostControl: this.travelCostControl,
                type: this.currentVendor.type,
                baseLocationWhereBusinessLocated: this.baseLocationWhereBusinessLocated,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        else if (tempVendor.type == 'BridalMakeupArtist') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                // travelOtherIndianCities:this.travelOtherIndianCities,//s
                haveStudio: this.haveStudio,
                regularMakeup: this.makeupPrice['regularMakeup'],
                airbrushMakeup: this.makeupPrice['airbrushMakeup'],
                guestMakeup: this.makeupPrice['guestMakeup'],
                hairstyling: this.makeupPrice['hairstyling'],
                modifiedBy: this.currentVendor.brandname,
                nailPaint: this.makeupPrice['nailPaint'],
                draping: this.makeupPrice['draping'],
                mehendi: this.makeupPrice['mehendi'],
                jewellery: this.makeupPrice['jewellery'],
                travelToClientVenue: this.travelToClientVenue,
                travelMarkeupCharges: this.travelMarkeupCharges,
                brandsUsed: this.brandsUsed,
                travelcost: this.travelCostControl,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        else if (tempVendor.type == 'Caterer') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                haveStudio: this.haveStudio,
                type: this.currentVendor.type,
                modifiedBy: this.currentVendor.brandname,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                startingPrice: this.startingPrice,
                catererContent: this.catererContent,
                catererType: this.catererType,
                cuisinesOffered: this.cuisinesOffered,
                speciality: this.speciality,
                standardVegInclude: this.standardVegInclude,
                minNumberCater: this.minNumberCater
            });
        }
        else if (tempVendor.type == 'WeddingInvitation') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                modifiedBy: this.currentVendor.brandname,
                boxedMaxPrice: this.boxedMaxPrice,
                boxedMinCards: this.boxedMinCards,
                boxedMinPrice: this.boxedMinPrice,
                unboxedMaxPrice: this.unboxedMaxPrice,
                unboxedMinCards: this.unboxedMinCards,
                unboxedMinPrice: this.unboxedMinPrice,
                ecardStartingPrice: this.ecardStartingPrice,
                designingStartingPrice: this.designingStartingPrice,
                invitationSpeciality: this.invitationSpeciality,
                shipInvities: this.shipInvities,
                otherInvitation: this.other,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl
            });
        }
        else if (tempVendor.type == 'Choreographer') {
            if (!this.costPerControl)
                this.perDayPrice.setValue(0);
            else {
                this.perNonVegPrice.setValue(0);
                this.perVegPrice.setValue(0);
            }
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                modifiedBy: this.currentVendor.brandname,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
                startingPrice: this.startingPrice,
                costPer: this.costPerControl,
                startingPriceInclude: this.startingPriceInclude,
                favouriteMusicGenres: this.favouriteMusicGenres,
                experiencedHave: this.experiencedHave,
                popularWorkAward: this.popularWorkAward,
                regularlyPlayClub: this.regularlyPlayClub
            });
        }
        else if (tempVendor.type == 'TravelHoneymoon') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                otherWorkLocation: this.otherWorkLocation,
                travelOtherIndianCities: this.travelOtherIndianCities,
                startingPrice: this.startingPrice,
                modifiedBy: this.currentVendor.brandname,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                withinIndia: this.withinIndia,
                internationalTravel: this.internationalTravel,
                baseLocationProvidingService: this.baseLocationProvidingService,
                popularHoneymoonDestination: this.popularHoneymoonDestination,
                holidayCompany: this.holidayCompany,
                helpCoubleBook: this.helpCoubleBook,
                mentionOtherService: this.mentionOtherService,
                howManyYearsAdvanceReach: this.howManyYearsAdvanceReach,
                experiencedHave: this.experiencedHave,
                awardsRecognitionPublications: this.awardsRecognitionPublications,
                trialPolicy: this.trialPolicy,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
            });
        }
        else if (tempVendor.type == 'PriestPandit') {
            this.serviceForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                startingPrice: this.startingPrice,
                preWeddingRokaPujaHawan: this.service_priest['Pre-wedding(Roka) puja/hawan'],
                saganPujaHawan: this.service_priest['Sagan puja/hawan'],
                weddingPujaHawan: this.service_priest['wedding puja/hawan'],
                matchingKundlis: this.service_priest['Matching kundlis'],
                astrology: this.service_priest['Astrology'],
                modifiedBy: this.currentVendor.brandname,
                samagriIncluded: this.samagriIncluded,
                languagesKnow: this.languagesKnow,
                experiencedHave: this.experiencedHave,
                serviceArea: this.serviceArea,
                type: this.currentVendor.type,
                servicePricingStatus: true,
                advanceForBooking: this.advanceBookingControl,
                paymentOnEventDate: this.paymentEventDateControl,
                cancellationPolicy: this.cancellationPolicy,
                chargeCancellation: this.cancelPercentControl,
                paymentOnDelivery: this.peymentDeliveryControl,
            });
        }
        // this.serviceForm.patchValue({servicePricingStatus:true})
        this.auth.updateVendorDetails(this.serviceForm.value).subscribe(function (res) {
            // console.log('service update');
            // console.log(res);
            // console.log('tempVEndor')
            // console.log(tempVendor)
            localStorage.setItem('current_vendor', JSON.stringify(tempVendor));
            _this.auth.showSwal('success-message', 'Welcome', 'you have just Saved in successfully');
        }, function (err) {
            console.log(err);
            _this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!');
        });
        // this.auth.signIn(this.clientprofileForm.value);
        // console.log('login');
    };
    ServicepricingComponent.prototype.areaClose = function (i) {
        this.nameOfArea.splice(i, 1);
    };
    ServicepricingComponent.prototype.checkPer = function (name) {
        if (name == 'Candid Photography' || name == 'Traditional Photography' || name == 'Cinematic Video' || name == 'Traditional Video')
            return 'Price per day ';
        if (name == 'Photo album')
            return 'Price per album';
        if (name == 'Pre-wedding Shoot')
            return 'Price for photoshoot';
    };
    ServicepricingComponent.prototype.changeChooseCore = function (e, flag) {
        var _this = this;
        // alert('1')
        if (flag == 1) {
            if (this.storeStudioStart.value == 'Other') {
                this.checkOtherYearFlag = true;
            }
            else
                this.checkOtherYearFlag = false;
        }
        else {
            if (this.chooseCoreControl.value) {
                this.chooseCoreControl.value.forEach(function (element) {
                    if (element == 'other')
                        _this.checkOtherFlag = true;
                });
            }
        }
    };
    ServicepricingComponent.prototype.selectPhotographyService = function (e) {
        console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        console.log('select pohtography service');
        console.log(e);
        // this.photographyCost.
        // e..forEach(element => {
        //   element
        // });
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    };
    ServicepricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servicepricing',
            template: __webpack_require__(/*! raw-loader!./servicepricing.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/servicepricing/servicepricing.component.html"),
            styles: [__webpack_require__(/*! ./servicepricing.component.css */ "./src/app/vendor/servicepricing/servicepricing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthWedService"]])
    ], ServicepricingComponent);
    return ServicepricingComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.component.css":
/*!*********************************************!*\
  !*** ./src/app/vendor/vendor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_bg{\n  position: absolute;\n  width:100%;\n  height: 100%;\n}\n.img_black{\n  position: absolute;\n  width: 100%;\n  height:100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(lightgray) , to(black));\n  background-image: linear-gradient(to bottom, lightgray , black);\n  opacity: 0.6;\n}\nsection{\n  position: relative;\n  /* height: 400px; */\n}\n.page-header1>h1{\n  position: absolute;\n  bottom: 10px;\n  left: 30px;\n  font-size: 25px;\n  font-weight: bold;\n  color:white;\n}\nlegend{\n  font-size: 18px;\n  color: gray;\n\n}\n.card-footer{\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlbmRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLDhGQUErRDtFQUEvRCwrREFBK0Q7RUFDL0QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7O0FBRWI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZW5kb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWdfYmd7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmltZ19ibGFja3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGxpZ2h0Z3JheSAsIGJsYWNrKTtcbiAgb3BhY2l0eTogMC42O1xufVxuc2VjdGlvbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xufVxuLnBhZ2UtaGVhZGVyMT5oMXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOndoaXRlO1xufVxubGVnZW5ke1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBncmF5O1xuXG59XG4uY2FyZC1mb290ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/vendor/vendor.component.ts":
/*!********************************************!*\
  !*** ./src/app/vendor/vendor.component.ts ***!
  \********************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var VendorComponent = /** @class */ (function () {
    function VendorComponent(formBuilder, auth) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.workingSinceFlag = false;
        this.brandname = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]);
        this.introduction = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.workingSince = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.otherSpecifiedYear = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](1800);
        console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(localStorage.getItem('current_vendor'));
        console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
        this.currentVendor = JSON.parse(localStorage.getItem('current_vendor'));
        if (this.currentVendor.brandname)
            this.brandname.setValue(this.currentVendor.brandname);
        if (this.currentVendor.introduction)
            this.introduction.setValue(this.currentVendor.introduction);
        if (this.currentVendor.workingSince)
            this.workingSince.setValue(this.currentVendor.workingSince.toString());
        // if(this.currentVendor.basicPrice)
        //   this.basicPrice.setValue(this.currentVendor.basicPrice);
        // if(this.currentVendor.)
    }
    VendorComponent.prototype.ngOnInit = function () {
        this.vendorbasicForm = this.formBuilder.group({
            _id: this.currentVendor._id,
            brandname: this.brandname,
            introduction: this.introduction,
            workingSince: this.workingSince,
            type: this.currentVendor.type,
            modifiedBy: this.brandname
            // basicPrice:this.basicPrice,
            // costPer:this.costPerControl,
            // perVegPrice:this.perVegPrice,
            // perNonVegPrice:this.perNonVegPrice,
            // perDayPrice:this.perDayPrice,
        });
    };
    VendorComponent.prototype.changeChooseCore = function (e) {
        if (this.workingSince.value == 'Other') {
            this.workingSinceFlag = true;
        }
        else
            this.workingSinceFlag = false;
    };
    VendorComponent.prototype.submit = function () {
        var _this = this;
        var tempVendor;
        var tempYear = this.workingSince.value;
        if (this.workingSinceFlag)
            tempYear = this.otherSpecifiedYear.value;
        tempVendor = JSON.parse(localStorage.getItem('current_vendor'));
        if (tempVendor.type == 'Venue') {
            this.vendorbasicForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                brandname: this.brandname,
                introduction: this.introduction,
                workingSince: tempYear,
                type: this.currentVendor.type,
                modifiedBy: this.brandname,
                // basicPrice:this.basicPrice,
                basicDetailsStatus: true,
            });
        }
        else {
            this.vendorbasicForm = this.formBuilder.group({
                _id: this.currentVendor._id,
                brandname: this.brandname,
                introduction: this.introduction,
                workingSince: tempYear,
                type: this.currentVendor.type,
                // basicPrice:this.basicPrice,
                basicDetailsStatus: true,
            });
        }
        this.auth.updateVendorDetails(this.vendorbasicForm.value).subscribe(function (res) {
            console.log('basic update');
            console.log(res);
            // tempVendor.basicPrice = this.basicPrice.value;
            tempVendor.workingSince = _this.workingSince.value;
            tempVendor.introduction = _this.introduction.value;
            tempVendor.brandname = _this.brandname.value;
            tempVendor.basicStatus.basicDetailsStatus = true;
            // tempVendor.costPer = this.costPerControl;
            // tempVendor.perVegPlatePrice = this.perVegPrice.value;
            // tempVendor.perNonVegPlatePrice = this.perVegPrice.value;
            // tempVendor.perDayRentPrice = this.perVegPrice.value;
            // console.log('tempVEndor')
            // console.log(tempVendor)
            localStorage.setItem('current_vendor', JSON.stringify(tempVendor));
            _this.auth.showSwal('success-message', 'Welcome', 'you have just Saved in successfully');
        }, function (err) {
            _this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!');
        });
        // this.auth.signIn(this.clientprofileForm.value);
        // console.log('login');
    };
    VendorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vendor',
            template: __webpack_require__(/*! raw-loader!./vendor.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/vendor.component.html"),
            styles: [__webpack_require__(/*! ./vendor.component.css */ "./src/app/vendor/vendor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthWedService"]])
    ], VendorComponent);
    return VendorComponent;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/vendor/vendor.module.ts ***!
  \*****************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _vendor_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor.routing */ "./src/app/vendor/vendor.routing.ts");
/* harmony import */ var _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contactinfo/contactinfo.component */ "./src/app/vendor/contactinfo/contactinfo.component.ts");
/* harmony import */ var _servicepricing_servicepricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicepricing/servicepricing.component */ "./src/app/vendor/servicepricing/servicepricing.component.ts");
/* harmony import */ var _pastwork_pastwork_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pastwork/pastwork.component */ "./src/app/vendor/pastwork/pastwork.component.ts");
/* harmony import */ var _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profilepicture/profilepicture.component */ "./src/app/vendor/profilepicture/profilepicture.component.ts");
/* harmony import */ var _pastwork_previewupload_previewupload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pastwork/previewupload/previewupload.component */ "./src/app/vendor/pastwork/previewupload/previewupload.component.ts");
/* harmony import */ var _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mybusiness/mybusiness.component */ "./src/app/vendor/mybusiness/mybusiness.component.ts");
/* harmony import */ var _myreview_myreview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./myreview/myreview.component */ "./src/app/vendor/myreview/myreview.component.ts");
/* harmony import */ var _myrequest_myrequest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./myrequest/myrequest.component */ "./src/app/vendor/myrequest/myrequest.component.ts");
/* harmony import */ var _leads_leads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./leads/leads.component */ "./src/app/vendor/leads/leads.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/vendor/verify/verify.component.ts");
/* harmony import */ var _membershipplan_membershipplan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./membershipplan/membershipplan.component */ "./src/app/vendor/membershipplan/membershipplan.component.ts");
/* harmony import */ var _policiesplan_policiesplan_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./policiesplan/policiesplan.component */ "./src/app/vendor/policiesplan/policiesplan.component.ts");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _pagination_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pagination.module */ "./src/app/pagination.module.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { VendornavbarComponent } from './vendornavbar/vendornavbar.component';
// import { HttpClientModule } from '@angular/common/http';






var VendorModule = /** @class */ (function () {
    function VendorModule() {
    }
    VendorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_vendor_routing__WEBPACK_IMPORTED_MODULE_6__["VendorRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                // HttpClientModule,
                _pagination_module__WEBPACK_IMPORTED_MODULE_20__["PaginationModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_24__["environment"].firebaseConfig),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_22__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
                ngx_embed_video__WEBPACK_IMPORTED_MODULE_19__["EmbedVideo"].forRoot()
            ],
            declarations: [_vendor_component__WEBPACK_IMPORTED_MODULE_5__["VendorComponent"], _verify_verify_component__WEBPACK_IMPORTED_MODULE_16__["VerifyComponent"], _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_7__["ContactinfoComponent"], _servicepricing_servicepricing_component__WEBPACK_IMPORTED_MODULE_8__["ServicepricingComponent"], _pastwork_pastwork_component__WEBPACK_IMPORTED_MODULE_9__["PastworkComponent"], _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_10__["ProfilepictureComponent"], _pastwork_previewupload_previewupload_component__WEBPACK_IMPORTED_MODULE_11__["PreviewuploadComponent"], _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_12__["MybusinessComponent"], _myreview_myreview_component__WEBPACK_IMPORTED_MODULE_13__["MyreviewComponent"], _myrequest_myrequest_component__WEBPACK_IMPORTED_MODULE_14__["MyrequestComponent"], _leads_leads_component__WEBPACK_IMPORTED_MODULE_15__["LeadsComponent"], _membershipplan_membershipplan_component__WEBPACK_IMPORTED_MODULE_17__["MembershipplanComponent"], _policiesplan_policiesplan_component__WEBPACK_IMPORTED_MODULE_18__["PoliciesplanComponent"],]
        })
    ], VendorModule);
    return VendorModule;
}());



/***/ }),

/***/ "./src/app/vendor/vendor.routing.ts":
/*!******************************************!*\
  !*** ./src/app/vendor/vendor.routing.ts ***!
  \******************************************/
/*! exports provided: VendorRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutes", function() { return VendorRoutes; });
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor.component */ "./src/app/vendor/vendor.component.ts");
/* harmony import */ var _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactinfo/contactinfo.component */ "./src/app/vendor/contactinfo/contactinfo.component.ts");
/* harmony import */ var _servicepricing_servicepricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./servicepricing/servicepricing.component */ "./src/app/vendor/servicepricing/servicepricing.component.ts");
/* harmony import */ var _pastwork_pastwork_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pastwork/pastwork.component */ "./src/app/vendor/pastwork/pastwork.component.ts");
/* harmony import */ var _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profilepicture/profilepicture.component */ "./src/app/vendor/profilepicture/profilepicture.component.ts");
/* harmony import */ var _pastwork_previewupload_previewupload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pastwork/previewupload/previewupload.component */ "./src/app/vendor/pastwork/previewupload/previewupload.component.ts");
/* harmony import */ var _membershipplan_membershipplan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membershipplan/membershipplan.component */ "./src/app/vendor/membershipplan/membershipplan.component.ts");
/* harmony import */ var _myreview_myreview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myreview/myreview.component */ "./src/app/vendor/myreview/myreview.component.ts");
/* harmony import */ var _leads_leads_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./leads/leads.component */ "./src/app/vendor/leads/leads.component.ts");
/* harmony import */ var _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mybusiness/mybusiness.component */ "./src/app/vendor/mybusiness/mybusiness.component.ts");
/* harmony import */ var _myrequest_myrequest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myrequest/myrequest.component */ "./src/app/vendor/myrequest/myrequest.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/vendor/verify/verify.component.ts");












var VendorRoutes = [
    {
        path: '',
        redirectTo: 'basicDetails',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'basicDetails',
                component: _vendor_component__WEBPACK_IMPORTED_MODULE_0__["VendorComponent"]
            },
            {
                path: 'contactInfo',
                component: _contactinfo_contactinfo_component__WEBPACK_IMPORTED_MODULE_1__["ContactinfoComponent"]
            },
            {
                path: 'servicePricing',
                component: _servicepricing_servicepricing_component__WEBPACK_IMPORTED_MODULE_2__["ServicepricingComponent"]
            },
            {
                path: 'pastWork',
                component: _pastwork_pastwork_component__WEBPACK_IMPORTED_MODULE_3__["PastworkComponent"]
            },
            {
                path: 'pastWork/:id',
                component: _pastwork_previewupload_previewupload_component__WEBPACK_IMPORTED_MODULE_5__["PreviewuploadComponent"]
            },
            {
                path: 'profilePicture',
                component: _profilepicture_profilepicture_component__WEBPACK_IMPORTED_MODULE_4__["ProfilepictureComponent"]
            },
            {
                path: 'newRequest',
                component: _myrequest_myrequest_component__WEBPACK_IMPORTED_MODULE_10__["MyrequestComponent"]
            },
            {
                path: 'myBusiness',
                component: _mybusiness_mybusiness_component__WEBPACK_IMPORTED_MODULE_9__["MybusinessComponent"]
            },
            {
                path: 'leads',
                component: _leads_leads_component__WEBPACK_IMPORTED_MODULE_8__["LeadsComponent"]
            },
            {
                path: 'myReview',
                component: _myreview_myreview_component__WEBPACK_IMPORTED_MODULE_7__["MyreviewComponent"]
            },
            {
                path: 'membershipPlan',
                component: _membershipplan_membershipplan_component__WEBPACK_IMPORTED_MODULE_6__["MembershipplanComponent"]
            }, {
                path: 'verify',
                component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__["VerifyComponent"]
            }
            // ,
            // {
            //   path:'policiesPlan',
            //   component:PoliciesplanComponent
            // }
        ]
    }
];


/***/ }),

/***/ "./src/app/vendor/verify/verify.component.css":
/*!****************************************************!*\
  !*** ./src/app/vendor/verify/verify.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_bg{\r\n    position: absolute;\r\n    width:100%;\r\n    height: 100%;\r\n  }\r\n  .img_black{\r\n    position: absolute;\r\n    width: 100%;\r\n    height:100%;\r\n    background-image: -webkit-gradient(linear, left top, left bottom, from(lightgray) , to(black));\r\n    background-image: linear-gradient(to bottom, lightgray , black);\r\n    opacity: 0.6;\r\n  }\r\n  section{\r\n    position: relative;\r\n    /* height: 400px; */\r\n  }\r\n  .page-header1>h1{\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 30px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color:white;\r\n  }\r\n  legend{\r\n    font-size: 18px;\r\n    color: gray;\r\n  \r\n  }\r\n  .card-footer{\r\n    background-color: transparent;\r\n  }\r\n  legend{\r\n      \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCw4RkFBK0Q7SUFBL0QsK0RBQStEO0lBQy9ELFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixXQUFXOztFQUViO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci92ZXJpZnkvdmVyaWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nX2Jne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmltZ19ibGFja3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBsaWdodGdyYXkgLCBibGFjayk7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG4gIHNlY3Rpb257XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xyXG4gIH1cclxuICAucGFnZS1oZWFkZXIxPmgxe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIGxlZ2VuZHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIFxyXG4gIH1cclxuICAuY2FyZC1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgbGVnZW5ke1xyXG4gICAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/vendor/verify/verify.component.ts":
/*!***************************************************!*\
  !*** ./src/app/vendor/verify/verify.component.ts ***!
  \***************************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(auth) {
        this.auth = auth;
        // verifyForm: FormGroup;
        this.phonecontrol = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.phonecontrolCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.emailcontrol = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.emailcontrolCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.isPhone = false;
        this.isEmail = false;
        // cities;
        this.agreeFlag = false;
        this.currentVendor = JSON.parse(localStorage.getItem('current_vendor'));
        if (this.currentVendor.email)
            this.emailcontrol.setValue(this.currentVendor.email);
        if (this.currentVendor.phone)
            this.phonecontrol.setValue(this.currentVendor.phone);
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.emailcontrolCode.value == this.randEmail) {
            this.auth.showSwal('success-message', 'Success', 'you have just verified Email');
            this.auth.setVerifyEmail(this.currentVendor._id).subscribe(function (res) {
                console.log(res);
                _this.currentVendor.verifyStatus.emailVerify = true;
                localStorage.setItem('current_vendor', JSON.stringify(_this.currentVendor));
            });
        }
        else {
            this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!');
        }
    };
    VerifyComponent.prototype.sendPhone = function () {
        var _this = this;
        if (this.phonecontrolCode.value == this.randPhone) {
            this.auth.showSwal('success-message', 'Success', 'you have just verified phone');
            this.auth.setVerifyPhone(this.currentVendor._id).subscribe(function (res) {
                console.log(res);
                _this.currentVendor.verifyStatus.phoneVerify = true;
                localStorage.setItem('current_vendor', JSON.stringify(_this.currentVendor));
            });
        }
        else {
            this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!');
        }
    };
    VerifyComponent.prototype.resendPhone = function () {
        this.isPhone = true;
        this.randPhone = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        this.auth.showSwal('success-message', 'Welcome', 'we have just sent message');
        this.auth.phoneSendMsg(this.randPhone, this.currentVendor.phone).subscribe(function (res) {
            console.log('======== resendphone res ======');
            console.log(res);
        }, function (err) {
            console.log('======== resendphone err======');
            console.log(err);
        });
    };
    VerifyComponent.prototype.resendEmail = function () {
        this.isEmail = true;
        this.randEmail = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        this.auth.showSwal('success-message', 'Welcome', 'we have just sent message');
        this.auth.emailSendMsg(this.randEmail, this.currentVendor.email).subscribe(function (res) {
            console.log(res);
        });
    };
    //   this.auth.showSwal('success-message','Welcome', 'you have just Saved in successfully');
    // },(err)=>{
    //   this.auth.showSwal('warning-message', 'Wrong', 'you must input correct info!!!')
    VerifyComponent.prototype.agreeTerm = function () {
        console.log(this.agreeFlag);
    };
    VerifyComponent.prototype.submitProfile = function () {
        var msgTxt = 'You have to verify ';
        if (!this.currentVendor.verifyStatus.emailVerify)
            msgTxt += " Email.";
        if (!this.currentVendor.verifyStatus.phoneVerify)
            msgTxt += " Phone OTP. ";
        if (!this.currentVendor.basicStatus.basicDetailsStatus || !this.currentVendor.basicStatus.contactInfoStatus || !this.currentVendor.basicStatus.servicePricingStatus)
            msgTxt += " fill all the steps.";
        if (msgTxt.length > 20)
            this.auth.showNotification('top', 'right', 4, msgTxt);
        else
            this.auth.showNotification('top', 'right', 2, 'Your profile s submitted successfully. We take 48 hours ~ 72 hours to review and approve it.');
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! raw-loader!./verify.component.html */ "./node_modules/raw-loader/index.js!./src/app/vendor/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/vendor/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthWedService"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=vendor-vendor-module.js.map