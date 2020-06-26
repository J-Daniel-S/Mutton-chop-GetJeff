package getJeff.logging;

import java.util.Arrays;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class JeffLoggerAspect {

	private final Logger jeffLog = LoggerFactory.getLogger(this.getClass());

	@Pointcut("within(getJeff.*)")
	public void definePackagePointcuts() {
	}

	@After("definePackagePointcuts()")
	public void logAfter(JoinPoint jp) {
		jeffLog.error("\n\n\n");
		jeffLog.error("---------------------   Error log   ---------------------");
		jeffLog.error("==================== After method ====================\n {}.{} () with arguments [s] = {} ",
				jp.getSignature().getDeclaringTypeName(), jp.getSignature().getName(), Arrays.toString(jp.getArgs()));
		jeffLog.error(
				"_____________________________________________________________________________________________\n\n\n");
		jeffLog.debug("\n\n\n");
		jeffLog.debug("---------------------   Debug log   ---------------------");
		jeffLog.debug("==================== After method ====================\n {}.{} () with arguments [s] = {} ",
				jp.getSignature().getDeclaringTypeName(), jp.getSignature().getName(), Arrays.toString(jp.getArgs()));
		jeffLog.debug(
				"_____________________________________________________________________________________________\n\n\n");

	}

	public void saveLog(String log) {

	}
}
