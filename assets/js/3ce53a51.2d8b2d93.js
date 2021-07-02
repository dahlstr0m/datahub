(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[211],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2769:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=n(2122),a=n(9756),r=(n(7294),n(4137)),i=["components"],u={title:"JaaS Authentication",sidebar_label:"JaaS Authentication",slug:"/how/auth/jaas",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/jaas.md"},c="JaaS Authentication",s={unversionedId:"docs/how/auth/jaas",id:"docs/how/auth/jaas",isDocsHomePage:!1,title:"JaaS Authentication",description:"Overview",source:"@site/genDocs/docs/how/auth/jaas.md",sourceDirName:"docs/how/auth",slug:"/how/auth/jaas",permalink:"/docs/how/auth/jaas",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/jaas.md",version:"current",frontMatter:{title:"JaaS Authentication",sidebar_label:"JaaS Authentication",slug:"/how/auth/jaas",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/auth/jaas.md"},sidebar:"overviewSidebar",previous:{title:"Ingesting files from S3",permalink:"/docs/metadata-ingestion/s3-ingestion"},next:{title:"OIDC Authentication in React",permalink:"/docs/how/auth/sso/configure-oidc-react"}},l=[{value:"Overview",id:"overview",children:[{value:"Modify user.props file directly (Local Testing)",id:"modify-userprops-file-directly-local-testing",children:[]},{value:"Mount a custom user.props file (Docker Compose)",id:"mount-a-custom-userprops-file-docker-compose",children:[]}]},{value:"Custom JaaS Configuration",id:"custom-jaas-configuration",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jaas-authentication"},"JaaS Authentication"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The DataHub frontend server comes with support for plugging in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/security/jaas/JAASRefGuide.html"},"JaaS")," modules.\nThis allows you to use a custom authentication protocol to log your users into DataHub. "),(0,r.kt)("p",null,"By default, we in include sample configuration of a file-based username / password authentication module (",(0,r.kt)("a",{parentName:"p",href:"http://archive.eclipse.org/jetty/8.0.0.M3/apidocs/org/eclipse/jetty/plus/jaas/spi/PropertyFileLoginModule.html"},"PropertyFileLoginModule"),")\nthat is configured with a single username / password combination: datahub - datahub. "),(0,r.kt)("p",null,"To change or extend the default behavior, you have multiple options, each dependent on which deployment environment you're operating in."),(0,r.kt)("h3",{id:"modify-userprops-file-directly-local-testing"},"Modify user.props file directly (Local Testing)"),(0,r.kt)("p",null,"The first option for customizing file-based users is to modify the file ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend/app/conf/user.props")," directly.\nOnce you've added your desired users, you can simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"./dev.sh")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"./datahub-frontend/run-local-frontend")," to validate your\nnew users can log in."),(0,r.kt)("h3",{id:"mount-a-custom-userprops-file-docker-compose"},"Mount a custom user.props file (Docker Compose)"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend")," container will look for a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"user.props")," mounted at the container path\n",(0,r.kt)("inlineCode",{parentName:"p"},"/datahub-frontend/conf/user.props"),". If you wish to launch this container with a custom set of users, you'll need to override the default\nfile mounting when running using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),". "),(0,r.kt)("p",null,"To do so, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," service in the docker-compose.yml file containing it to include the custom file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'datahub-frontend-react:\n    build:\n      context: ../\n      dockerfile: docker/datahub-frontend/Dockerfile\n    image: linkedin/datahub-frontend-react:${DATAHUB_VERSION:-head}\n    env_file: datahub-frontend/env/docker.env\n    hostname: datahub-frontend-react\n    container_name: datahub-frontend-react\n    ports:\n      - "9002:9002"\n    depends_on:\n      - datahub-gms\n    volumes:\n      - ./my-custom-dir/user.props:/datahub-frontend/conf/user.props\n')),(0,r.kt)("p",null,"And then run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," against your compose file. "),(0,r.kt)("h2",{id:"custom-jaas-configuration"},"Custom JaaS Configuration"),(0,r.kt)("p",null,"In order to change the default JaaS module configuration, you will have to launch the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container with the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"jaas.conf")," file mounted as a volume\nat the location ",(0,r.kt)("inlineCode",{parentName:"p"},"/datahub-frontend/conf/jaas.conf"),"."),(0,r.kt)("p",null,"To do so, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-frontend-react")," service in the docker-compose.yml file containing it to include the custom file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'datahub-frontend-react:\n    build:\n      context: ../\n      dockerfile: docker/datahub-frontend/Dockerfile\n    image: linkedin/datahub-frontend-react:${DATAHUB_VERSION:-head}\n    env_file: datahub-frontend/env/docker.env\n    hostname: datahub-frontend-react\n    container_name: datahub-frontend-react\n    ports:\n      - "9002:9002"\n    depends_on:\n      - datahub-gms\n    volumes:\n      - ./my-custom-dir/jaas.conf:/datahub-frontend/conf/jaas.conf\n')),(0,r.kt)("p",null,"And then run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")," against your compose file."))}p.isMDXComponent=!0}}]);