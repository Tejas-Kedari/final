(this["webpackJsonpfinal-portfolio"]=this["webpackJsonpfinal-portfolio"]||[]).push([[0],{381:function(e,n,t){"use strict";t.r(n);var r,i=t(1),a=t.n(i),o=t(43),c=t.n(o),s=t(35),l=t(6),d=t(64),b=t(7),j=t.p+"static/media/avatar.843d8baa.jpg",m=t(0);var h,p=b.b.nav(r||(r=Object(l.a)(['\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid var(--border-color);\n    .avatar{\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 70%;\n            border-radius: 50%;\n            border: 8px solid var(--border-color);\n        }\n    }\n\n    .nav-items{\n        width: 100%;\n        text-align: center;\n        .active-class{\n            background-color: var(--primary-color-light);\n            color: white;\n        }\n        li{\n            display: block;\n            a{\n                display: block;\n                padding: .45rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight: 600;\n                letter-spacing: 1px;\n                &:hover{\n                    cursor: pointer;\n                    color: var(--white-color);\n                }\n                &::before{\n                    content: "";\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width: 0;\n                    height: 50%;\n                    background-color: var( --primary-color);\n                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;\n                    opacity: 0.21;\n                    z-index: -1;\n                }\n            }\n\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\n\n    footer{\n        border-top: 1px solid var(--border-color);\n        width: 100%;\n        p{\n            padding: 1.3rem 0;\n            font-size: 1.1rem;\n            display: block;\n            text-align: center;\n        }\n    }\n']))),x=function(){return Object(m.jsxs)(p,{children:[Object(m.jsx)("div",{className:"avatar",children:Object(m.jsx)("img",{src:j,alt:""})}),Object(m.jsxs)("ul",{className:"nav-items",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Resume"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/portfolios",activeClassName:"active-class",exact:!0,children:"Portfolios"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/blogs",activeClassName:"active-class",exact:!0,children:"Blogs"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(s.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("p",{children:["@2021 ",Object(m.jsx)("b",{children:"Tejas Kedari"})]})})]})};var g=b.b.div(h||(h=Object(l.a)(["\n    width: 16.3rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    overflow: hidden;\n    transition: all .4s ease-in-out;\n    @media screen and (max-width:1200px){\n        transform: translateX(-100%);\n        z-index: 20;\n    }\n"]))),u=function(e){var n=e.navToggle;return Object(m.jsx)(g,{className:"".concat(n?"nav-toggle":""),children:Object(m.jsx)(x,{})})},O=t(117),v=t.n(O),f=t(126),w=t.n(f),k=t(124),y=t.n(k),N=t(122),z=t.n(N),S=t(121),C=t.n(S),F=t(123),I=t.n(F),A=t(125),E=t.n(A),P=t(116),T=t.n(P);var D,J=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(T.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})};var M,B=b.b.header(D||(D=Object(l.a)(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n   \n    .typography{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n        width: 80%;\n\n        .icons{\n            display: flex;\n            justify-content: center;\n            margin-top: 1rem;\n            flex-wrap: wrap;\n            row-gap: 15px;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                transition: all .4s ease-in-out;\n                cursor: pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right: 1rem;\n                }\n                svg{\n                    margin: .5rem;\n                }\n            }\n\n            .i-youtube{\n                &:hover{\n                    border: 2px solid red;\n                    color: red;\n                }\n            }\n\n            .i-telegram{\n                &:hover{\n                    border: 2px solid #0088CC;\n                    color: #0088CC;\n                }\n            }\n\n            .i-twitter{\n                &:hover{\n                    border: 2px solid #00ACEE;\n                    color: #00ACEE;\n                }\n            }\n\n            .i-insta{\n                &:hover{\n                    border: 2px solid deeppink;\n                    color: deeppink;\n                }\n            }\n\n            .i-github{\n                &:hover{\n                    border: 2px solid #5F4687;\n                    color: #5F4687;\n                }\n            }\n\n            .i-linkedIn{\n                &:hover{\n                    border: 2px solid #0A66C2;\n                    color: #0A66C2;\n                }\n            }\n        }\n    }\n"]))),R=function(){return Object(m.jsxs)(B,{children:[Object(m.jsx)("div",{className:"particle-con",children:Object(m.jsx)(J,{})}),Object(m.jsxs)("div",{className:"typography",children:[Object(m.jsxs)("h1",{children:["Hi, I'm ",Object(m.jsx)("span",{children:"Tejas Kedari"})]}),Object(m.jsx)("p",{children:"I am Computer Science Enthusiast. I started learning programming languages since when I was 14 years old. I worked on several frameworks such as Angular, React, Django, NodeJs, ExpressJs ..."}),Object(m.jsxs)("div",{className:"icons",children:[Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-facebook",children:Object(m.jsx)(v.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-insta",children:Object(m.jsx)(C.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-twitter",children:Object(m.jsx)(z.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-github",children:Object(m.jsx)(I.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-linkedIn",children:Object(m.jsx)(y.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-youtube",children:Object(m.jsx)(E.a,{})}),Object(m.jsx)("a",{href:"https://www.google.com",className:"icon i-telegram",children:Object(m.jsx)(w.a,{})})]})]})]})},W=t.p+"static/media/resume.b06c3f66.jpg";var H,L=b.b.a(M||(M=Object(l.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: "";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left: 0;\n        bottom: 0;\n        opacity: .7;\n    }\n    &:hover::after{\n        width: 100%;\n        background-color: var(--white-color);\n    }\n']))),U=function(e){var n=e.title;return Object(m.jsx)(L,{children:n})};var K,X=b.b.div(H||(H=Object(l.a)(["\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: 60% 40%;\n    @media screen and (max-width:1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n    @media screen and (max-width: 1366px) {\n        display: flex;\n    }\n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            max-height: 605px;\n            object-fit: cover;\n        }\n    }\n    .right-content{\n        width: 100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;\n            }\n        }\n        .paragraph{\n            padding: 1rem 0;\n        }\n        .about-info{\n            display: flex;\n            padding-bottom: 1.4rem;\n            .info-title{\n                padding-right: 3rem;\n                p{\n                    font-weight: 600;\n                }\n            }\n            .info-title, .info{\n                p{\n                    padding: .3rem 0;\n                }\n            }\n        }\n    }\n"]))),_=function(){return Object(m.jsxs)(X,{children:[Object(m.jsx)("div",{className:"left-content",children:Object(m.jsx)("img",{src:W,alt:""})}),Object(m.jsxs)("div",{className:"right-content",children:[Object(m.jsxs)("h4",{children:["I am ",Object(m.jsx)("span",{children:"Tejas Kedari"})]}),Object(m.jsx)("p",{className:"paragraph",children:"I am Full Stack Developer. I have good experience with Web Devlopment. I've developed some complex project like, E-commerce websites, and clones in ReactJs like, tinder (MERN stack), Linked-in (ReactJS, Redux, firebase), and various smaller project & concurrently developed some games like, blackjack(JavaScript), RPS-game(JavaScript)."}),Object(m.jsxs)("div",{className:"about-info",children:[Object(m.jsxs)("div",{className:"info-title",children:[Object(m.jsx)("p",{children:"Full Name"}),Object(m.jsx)("p",{children:"Age"}),Object(m.jsx)("p",{children:"Nationality "}),Object(m.jsx)("p",{children:"Languages "}),Object(m.jsx)("p",{children:"Location"}),Object(m.jsx)("p",{children:"Service"})]}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("p",{children:": Tejas Kedari"}),Object(m.jsx)("p",{children:": 21"}),Object(m.jsx)("p",{children:": Indian "}),Object(m.jsx)("p",{children:": Marathi, Hindi, English "}),Object(m.jsx)("p",{children:": Pune, Maharastra"}),Object(m.jsx)("p",{children:": Freelance"})]})]}),Object(m.jsx)(U,{title:"Download Cv"})]})]})};var G,V,Q,Y=b.b.div(K||(K=Object(l.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.1rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .7rem;\n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color-2);\n            border-radius: 15px;\n            left: 0;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left: 0;\n        }\n        span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n']))),q=function(e){var n=e.title,t=e.span;return Object(m.jsx)(Y,{children:Object(m.jsxs)("h2",{children:[n," ",Object(m.jsx)("b",{children:Object(m.jsx)("span",{children:t})})]})})},Z=b.b.div(G||(G=Object(l.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n"]))),$=b.b.div(V||(V=Object(l.a)(["\n    padding: 5rem 0;\n"])));var ee,ne=b.b.div(Q||(Q=Object(l.a)(['\n    background-color: var(--background-dark-grey);\n    border-left: 1px solid var(--border-color);\n    border-top: 8px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    transition: all .4s ease-in-out;\n    &:hover{\n        border-top: 8px solid var(--primary-color);\n        transform: translateY(3px);\n    }\n    .container{\n        padding: 1.2rem;\n\n        img clippath{\n            fill: #ff0000;\n        }\n        h4{\n            color: var(--white-color);\n            font-size: 1.6rem;\n            padding: 1rem 0;\n            position: relative;\n            &::after{\n                content: "";\n                width: 4rem;\n                background-color: var(--border-color);\n                height: 3px;\n                position: absolute;;\n                left: 0;\n                bottom: 0;\n                border-radius: 10px;\n            }\n        }\n\n        p{\n            padding: .8rem 0;\n            /* text-align: justify; */\n        }\n    }\n']))),te=function(e){var n=e.image,t=e.title,r=e.paragraph;return Object(m.jsx)(ne,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("img",{src:n,alt:""}),Object(m.jsx)("h4",{children:t}),Object(m.jsx)("p",{children:r})]})})},re=t.p+"static/media/design.c8d07446.svg",ie=t.p+"static/media/intelligence.f74a3a58.svg",ae=t.p+"static/media/Increase.06a15ed3.svg",oe=t.p+"static/media/Web.997674d7.svg",ce=t.p+"static/media/WordPress.baf04e87.svg",se=t.p+"static/media/mobile.fe5ecf76.svg";var le,de=b.b.section(ee||(ee=Object(l.a)(["\n    .services{\n        margin-top: 5rem;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 1.5rem;\n        @media screen and (max-width:1000px){\n            flex-direction: column;\n        }\n        @media screen and (max-width:950px){\n            grid-template-columns: repeat(2, 1fr);\n        }\n        @media screen and (max-width:650px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n       \n    }\n"]))),be=function(){return Object(m.jsx)($,{children:Object(m.jsxs)(de,{children:[Object(m.jsx)(q,{title:"Services",span:"services"}),Object(m.jsxs)("div",{className:"services",children:[Object(m.jsx)(te,{image:re,title:"Web Development",paragraph:"I have good experience in web developement. I build so much WebApplications and websites, specially single page applications."}),Object(m.jsx)("div",{className:"mid-card",children:Object(m.jsx)(te,{image:ie,title:"IOT",paragraph:"I developed IOT based projects so that we can operate the devices thorough the internet. Which ultimately save the time and management of devices manually."})}),Object(m.jsx)(te,{image:se,title:"Mobile Apps",paragraph:"I developed mobile apps in flutter and react-native. Those technologies reduce the code developement time and gives same UI in all platforms"})]}),Object(m.jsxs)("div",{className:"services",children:[Object(m.jsx)(te,{image:oe,title:"Graphics Design",paragraph:"I design UI/UX for webapplications and mobile apps. Also hands on Adobe Softwares like Photoshop, Primier Pro and After Effects"}),Object(m.jsx)("div",{className:"mid-card",children:Object(m.jsx)(te,{image:ae,title:"SEO",paragraph:"I optimize the website as per seo rules and can do offpage, onpage and technical seo. As well as i do seo for youtube and other social media platforms."})}),Object(m.jsx)(te,{image:ce,title:"Content Writing",paragraph:"I write seo freindly content in technical field like programming concepts and informations and explanations about functions and structures of languages."})]})]})})};var je,me=b.b.section(le||(le=Object(l.a)(["\n    \n"]))),he=function(){return Object(m.jsx)(Z,{children:Object(m.jsxs)(me,{children:[Object(m.jsx)(q,{title:"About Me",span:"About Me"}),Object(m.jsx)(_,{}),Object(m.jsx)(be,{})]})})};var pe,xe=b.b.div(je||(je=Object(l.a)(["\n    .progress-bar{\n        display: flex;\n        align-items: center;\n        p{\n            padding-right: 1.1rem;\n        }\n        .progress{\n            position: relative;\n            width: 100%;\n            height: .4rem;\n            background-color: var(--border-color);\n            span{\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                height: 100%;\n                background-color: var(--primary-color)\n            }\n        }\n    }\n"]))),ge=function(e){var n=e.title,t=e.width,r=e.text;return Object(m.jsxs)(xe,{children:[Object(m.jsx)("h6",{children:n}),Object(m.jsxs)("div",{className:"progress-bar",children:[Object(m.jsx)("p",{children:r}),Object(m.jsx)("div",{className:"progress",children:Object(m.jsx)("span",{style:{width:t}})})]})]})};var ue,Oe=b.b.section(pe||(pe=Object(l.a)(["\n    .skills{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 3rem;\n        @media screen and (max-width: 700px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]))),ve=function(){return Object(m.jsxs)(Oe,{children:[Object(m.jsx)(q,{title:"Programming Languages",span:"Languages"}),Object(m.jsx)($,{children:Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)(ge,{title:"HTML5",width:"78%",text:"78%"}),Object(m.jsx)(ge,{title:"CSS3",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"SCSS",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"JAVASCRIPT",width:"65%",text:"65%"}),Object(m.jsx)(ge,{title:"JAVA",width:"75%",text:"75%"}),Object(m.jsx)(ge,{title:"PYTHON",width:"65%",text:"65%"}),Object(m.jsx)(ge,{title:"C",width:"78%",text:"78%"}),Object(m.jsx)(ge,{title:"C++",width:"63%",text:"63%"})]})}),Object(m.jsx)(q,{title:"FrameWorks I Worked On",span:"FrameWorks"}),Object(m.jsx)($,{children:Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)(ge,{title:"Angular",width:"82%",text:"82%"}),Object(m.jsx)(ge,{title:"React Js",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"Django",width:"65%",text:"65%"}),Object(m.jsx)(ge,{title:"Express Js",width:"75%",text:"75%"}),Object(m.jsx)(ge,{title:"Node Js",width:"65%",text:"65%"}),Object(m.jsx)(ge,{title:"React Native",width:"78%",text:"78%"}),Object(m.jsx)(ge,{title:"Flutter",width:"70%",text:"70%"})]})}),Object(m.jsx)(q,{title:"UI/UX Graphics Designing",span:"Designing"}),Object(m.jsx)($,{children:Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)(ge,{title:"Figma",width:"78%",text:"78%"}),Object(m.jsx)(ge,{title:"Adobe Photoshop 2020",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"Adobe Premier Pro 2020",width:"68%",text:"68%"}),Object(m.jsx)(ge,{title:"Adobe After Effects 2020",width:"75%",text:"75%"})]})}),Object(m.jsx)(q,{title:"DataBases",span:"Database"}),Object(m.jsx)($,{children:Object(m.jsxs)("div",{className:"skills",children:[Object(m.jsx)(ge,{title:"MySQL",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"MongoDB",width:"70%",text:"70%"}),Object(m.jsx)(ge,{title:"Redis",width:"68%",text:"68%"}),Object(m.jsx)(ge,{title:"FireBase",width:"60%",text:"60%"}),Object(m.jsx)(ge,{title:"Influx DB",width:"65%",text:"65%"})]})})]})};var fe,we=b.b.div(ue||(ue=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg{\n            font-size: 3rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),ke=function(e){var n=e.icon,t=e.title;return Object(m.jsxs)(we,{children:[Object(m.jsx)("p",{children:n}),Object(m.jsx)("h3",{children:t})]})},ye=t(127),Ne=t.n(ye);var ze,Se=b.b.div(fe||(fe=Object(l.a)(['\n    display: flex;\n    @media screen and (max-width: 421px){\n        p, h5, h6{\n            font-size: 80%;\n        }\n    }\n    &:not(:last-child){\n        padding-bottom: 3rem;\n    }\n    .left-content{\n        width: 50%;\n        padding-left: 20px;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: -10px;\n            top: 5px;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            border: 2px solid var(--border-color);\n            background-color: var(--background-dark-color);\n        }\n        p{\n            display: inline-block;\n        }\n    }\n    .right-content{\n        padding-left: 5rem;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 15px;\n            height: 2px;\n            width: 3rem;\n            background-color: var(--border-color);\n        }\n        h5{\n            color: var(--primary-color);\n            font-size: 2rem;\n            padding-bottom: .4rem;\n        }\n        h6{\n            padding-bottom: .6rem;\n            font-size: 1.5rem;\n        }\n    }\n']))),Ce=function(e){var n=e.year,t=e.title,r=e.subTitle,i=e.text;return Object(m.jsxs)(Se,{children:[Object(m.jsx)("div",{className:"left-content",children:Object(m.jsx)("p",{children:n})}),Object(m.jsxs)("div",{className:"right-content",children:[Object(m.jsx)("h5",{children:t}),Object(m.jsx)("h6",{children:r}),Object(m.jsx)("p",{children:i})]})]})};var Fe=b.b.section(ze||(ze=Object(l.a)(["\n    .small-title{\n        padding-bottom: 3rem;\n    }\n    .u-small-title-margin{\n        margin-top: 4rem;\n    }\n\n    .resume-content{\n        border-left: 2px solid var(--border-color);\n    }\n"]))),Ie=function(){var e=Object(m.jsx)(Ne.a,{});return Object(m.jsxs)(Fe,{children:[Object(m.jsx)(q,{title:"Resume",span:"resume"}),Object(m.jsxs)($,{children:[Object(m.jsx)("div",{className:"small-title u-small-title-margin",children:Object(m.jsx)(ke,{icon:e,title:"Educational Qualifications"})}),Object(m.jsxs)("div",{className:"resume-content ",children:[Object(m.jsx)(Ce,{year:"2018 - 2021",title:"Computer Science Degree",subTitle:"Shivaji University, Kolhapur",text:"I got my Computer Science (BCS) degree from Rajarshi Chhatrapati Shahu College, Shivaji University, Kolhapur. Where I learned some Programming languages like C/C++, C#, Java, Python, PHP... etc. I studied some extra stacks like reactJs, NodeJs, ExpressJs, Django Framework. Android devlopment (react-native)."}),Object(m.jsx)(Ce,{year:"2016 - 2018",title:"H.S.C",subTitle:"A.A.C Manchar, Pune",text:"I Completed my Higher Secondary School education (H.S.C) from Annasaheb Awate College, Manchar, Pune, When I was in the studying in this college, I have get more passion about IT field and I started learning from online resources and learned skills like HTML, CSS, and JavaScript. "}),Object(m.jsx)(Ce,{year:"2015 - 2016",title:"S.S.C",subTitle:"B.V.S Shinoli, Pune",text:"I Completed my Secondary School education (S.S.C) from Bhimashankar Vidyamandir Shinoli, Pune, Here I get the basic ideas of problem solving methods by solving the geometric and algebric expressions step by step which help in my logic develpment and I learned some basic web development in dreamwaver IDE. "})]})]})]})};var Ae,Ee=function(){return Object(m.jsxs)(Z,{children:[Object(m.jsx)(ve,{}),Object(m.jsx)(Ie,{})]})},Pe=t(128),Te=t.n(Pe),De=t(129),Je=t.n(De),Me=t(130),Be=t.n(Me);var Re,We=b.b.div(Ae||(Ae=Object(l.a)(["\n    padding:1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),He=function(e){var n=e.title,t=e.icon,r=e.cont1,i=e.cont2;return Object(m.jsxs)(We,{children:[Object(m.jsx)("div",{className:"left-content",children:t}),Object(m.jsxs)("div",{className:"right-content",children:[Object(m.jsx)("h6",{children:n}),Object(m.jsx)("p",{children:r}),Object(m.jsx)("p",{children:i})]})]})};var Le,Ue=b.b.section(Re||(Re=Object(l.a)(["\n    .contact-section{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width: 978px){\n            grid-template-columns: repeat(1, 1fr);\n            .f-button{\n                margin-bottom: 3rem;\n            }\n        }\n        .right-content{\n            display: grid;\n            grid-template-columns: repeat(1, 1fr);\n            @media screen and (max-width: 502px){\n                width: 70%;\n            }\n        }\n        .contact-title{\n            h4{\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n        .form{\n            width: 100%;\n            @media screen and (max-width: 502px){\n                width: 100%;\n            }\n            .form-field{\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;\n                label{\n                    position: absolute;\n                    left: 20px;\n                    top: -19px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding:0 .5rem;\n                    color: inherit;\n                }\n                input{\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding:0 15px;\n                    width: 100%;\n                    color: inherit;\n                }\n                textarea{\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    color: inherit;\n                    width: 100%;\n                    padding: .8rem 1rem;\n                }\n            }\n\n            \n        }\n    }\n"]))),Ke=function(){var e=Object(m.jsx)(Te.a,{}),n=Object(m.jsx)(Je.a,{}),t=Object(m.jsx)(Be.a,{});return Object(m.jsxs)(Z,{children:[Object(m.jsx)(q,{title:"Contact",span:"Contact"}),Object(m.jsx)(Ue,{children:Object(m.jsxs)($,{className:"contact-section",children:[Object(m.jsxs)("div",{className:"left-content",children:[Object(m.jsx)("div",{className:"contact-title",children:Object(m.jsx)("h4",{children:"Get In Touch"})}),Object(m.jsxs)("form",{className:"form",children:[Object(m.jsxs)("div",{className:"form-field",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Enter your name*"}),Object(m.jsx)("input",{type:"text",id:"name"})]}),Object(m.jsxs)("div",{className:"form-field",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Enter your email*"}),Object(m.jsx)("input",{type:"email",id:"email"})]}),Object(m.jsxs)("div",{className:"form-field",children:[Object(m.jsx)("label",{htmlFor:"subject",children:"Enter your subject"}),Object(m.jsx)("input",{type:"text",id:"subject"})]}),Object(m.jsxs)("div",{className:"form-field",children:[Object(m.jsx)("label",{htmlFor:"text-area",children:"Enter your Message*"}),Object(m.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",rows:"10"})]}),Object(m.jsx)("div",{className:"form-field f-button",children:Object(m.jsx)(U,{title:"Send Email"})})]})]}),Object(m.jsxs)("div",{className:"right-content",children:[Object(m.jsx)(He,{title:"Phone",icon:e,cont1:"+91-7030303437",cont2:"09421202625"}),Object(m.jsx)(He,{title:"Email",icon:n,cont1:"tejaskedari@gmail.com",cont2:"primecodes.07@gmail.com"}),Object(m.jsx)(He,{title:"Address",icon:t,cont1:"Shivajinagar, Pune, Maharastra",cont2:"India"})]})]})})]})},Xe=t(131),_e=t.n(Xe),Ge=t(132),Ve=t.n(Ge),Qe=t(10),Ye=t(400),qe=t(399);var Ze,$e=b.b.main(Le||(Le=Object(l.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width:1200px){\n    margin-left: 0;\n  }\n  .lines{\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1, .line-2, .line-3, .line-4{\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),en=function(){var e=Object(i.useState)("dark-theme"),n=Object(d.a)(e,2),t=n[0],r=n[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),c=o[0],s=o[1],l=Object(i.useState)(!1),b=Object(d.a)(l,2),j=b[0],h=b[1];return Object(i.useEffect)((function(){document.documentElement.className=t}),[t]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{navToggle:j}),Object(m.jsx)("div",{className:"theme",children:Object(m.jsxs)("div",{className:"light-dark-mode",children:[Object(m.jsx)("div",{className:"left-content",children:Object(m.jsx)(_e.a,{})}),Object(m.jsx)("div",{className:"right-content",children:Object(m.jsx)(Ye.a,{value:"",checked:c,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===t?(r("dark-theme"),s(!1)):(r("light-theme"),s(!0))}})})]})}),Object(m.jsx)("div",{className:"ham-burger-menu",children:Object(m.jsx)(qe.a,{onClick:function(){return h(!j)},children:Object(m.jsx)(Ve.a,{})})}),Object(m.jsxs)($e,{children:[Object(m.jsxs)("div",{className:"lines",children:[Object(m.jsx)("div",{className:"line-1"}),Object(m.jsx)("div",{className:"line-2"}),Object(m.jsx)("div",{className:"line-3"}),Object(m.jsx)("div",{className:"line-4"})]}),Object(m.jsxs)(Qe.c,{children:[Object(m.jsx)(Qe.a,{path:"/",exact:!0,children:Object(m.jsx)(R,{})}),Object(m.jsx)(Qe.a,{path:"/about",exact:!0,children:Object(m.jsx)(he,{})}),Object(m.jsx)(Qe.a,{path:"/resume",exact:!0,children:Object(m.jsx)(Ee,{})}),Object(m.jsx)(Qe.a,{path:"/contact",exact:!0,children:Object(m.jsx)(Ke,{})})]})]})]})},nn=Object(b.a)(Ze||(Ze=Object(l.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\n\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(m.jsxs)(a.a.StrictMode,{children:[Object(m.jsx)(nn,{}),Object(m.jsx)(s.a,{children:Object(m.jsx)(en,{})})]}),document.getElementById("root"))}},[[381,1,2]]]);
//# sourceMappingURL=main.b916f7b6.chunk.js.map