package com.kjw.my2.config;


import com.kjw.my2.service.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.ServletWebRequest;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@WebFilter(urlPatterns = {"/auth/*"})
public class FilterImpl implements Filter {

    private final JwtService jwtService = new JwtService();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        final HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        final HttpServletResponse httpServletResponse = (HttpServletResponse) response;

        /*
            CORS에서는 preflight request를 통해 서버가 요청을 받을 수 있는지를 먼저 확인하기에
            filter에서 preflight request를 받으면 Authorization이 없으므로 차단을 해버리게 된다.

            그래서 Method가 OPTIONS인 preflight request를 통과 시켜줌으로써 문제를 해결
         */
        try {
            if (httpServletRequest.getMethod().equalsIgnoreCase("options") ||
                    jwtService.validToken(httpServletRequest.getHeader(HttpHeaders.AUTHORIZATION).substring(7))) {
                log.info("ok");
                chain.doFilter(request, response);
            } else {
                log.info("nope");
                httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
            }
        } catch (Exception e) {
            httpServletResponse.setStatus(HttpStatus.UNAUTHORIZED.value());
        }
    }
}
