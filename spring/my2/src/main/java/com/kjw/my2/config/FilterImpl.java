package com.kjw.my2.config;


import com.kjw.my2.service.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@WebFilter(urlPatterns = {"/auth/**"})
public class FilterImpl implements Filter {

    private final JwtService jwtService = new JwtService();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        try {
            if (jwtService.validToken(httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION).substring(7))) {
                chain.doFilter(request, response);
            } else {
                httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            }
        } catch (Exception e) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            log.info("token : {}", httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION));
        }
    }
}
