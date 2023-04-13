package com.kjw.my2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;


@ServletComponentScan
@SpringBootApplication
public class My2Application {

	public static void main(String[] args) {
		SpringApplication.run(My2Application.class, args);
	}

}
