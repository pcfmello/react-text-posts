# REACT TEXT POSTS
It's a project open source developed to post some texts and people can to read and to vote them.

## Which technologies were did use?
* [Java 8](https://www.java.com/pt_BR/download/faq/java8.xml)
* [Spring Boot 2.1.5](https://github.com/spring-projects/spring-boot)
* [HSQLDB 2.4.1](http://hsqldb.org/)
* [Docker Maven Plugin](https://github.com/spotify/docker-maven-plugin)
* [Frontend Maven Plugin](https://github.com/eirslett/frontend-maven-plugin)
* [ES6+](https://www.ecma-international.org/ecma-262/6.0/)
* [React 16.8](https://github.com/facebook/react/)
* [Formik 1.5.7](https://github.com/jaredpalmer/formik)
* [Yup](https://github.com/jquense/yup)
* [Material-UI 4](https://material-ui.com/)
* [Axios](https://github.com/axios/axios)
* [Moment JS](https://momentjs.com/)

## How to run?
It needs necessary have [Docker](https://docs.docker.com) installed.

* Linux or Mac:  
```$ ./mvnw clean package docker:build && docker run -it -p 9999:8090 react-text-posts```  

* Windows:  
```$ mvnw clean package docker:build && docker run -it -p 9999:8090 react-text-posts```  

## Running project
Openning the web browser and access ```http://localhost:9999```

## License
MIT

