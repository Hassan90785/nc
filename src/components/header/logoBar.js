import React from 'react';
import $ from 'jquery';
import {navItems} from '../../utilities/mainData/menu';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import './logoBar.css';
const LogoBar = () => {
    hoverEffect();
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand pl-3" href="#"> <Link to="/"> <img src={logo} width="150px"/> </Link></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {navItems.map((navItem) => (
          <li className={"nav-item cool-link " + (navItem.subMenu.length !== 0 ? 'dropdown' : ' ')}>
              {navItem.subMenu.length === 0 ? <a className="nav-link" href={navItem.route}>{navItem.name}</a> : <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {navItem.name}
        </a>}
              {navItem.subMenu.length !== 0 ?
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="container-fluid">
              <div className="row w-100">
                  {
                      navItem.subMenu.map((subNavItem) => (
                              <div key={subNavItem.id}
                                   className="col-xs-6 col-md-2 col-lg-2 col-xl-2 pl-md-4">
                        <h4 class="subNavitem"> {subNavItem.name} </h4>
                        <ul class="list-group nav-ul">
                            {
                                subNavItem.subMenu.map((subSubNavitem) => (
                                    <li class="list-group-item cool-list-item">
                                        <Link
                                            to={subSubNavitem.route}>
                                            {/*<RightCircleOutlined/>*/}
                                            <h6 class="subsubNavitem">{subSubNavitem.name}</h6>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                      )
                      )
                  }
              </div>

            </div>
        </div>
                  : ''}
      </li>
      ))}
    </ul>
  </div>


</nav>


        </>)
};

function hoverEffect() {
    $(document).ready(function (){
        $('.nav-ul>li').on('click', function(){
            // alert('Clicked')
            window.$('.navbar-collapse').collapse('hide');
        });

    });

    // breakpoint and up
    $(window).resize(function () {
        if ($(window).width() >= 980) {
            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $(".navbar .dropdown-menu").mouseleave(function () {
                $(this).removeClass("show");
            });

            // do something here
        }
    });
}

export default LogoBar;
