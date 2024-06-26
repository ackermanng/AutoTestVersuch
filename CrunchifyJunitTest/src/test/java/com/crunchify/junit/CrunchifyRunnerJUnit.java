package com.crunchify.junit;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.junit.runner.notification.Failure;
/**
 * @author Crunchify
 * 
 */
public class CrunchifyRunnerJUnit {
    public static void main(String[] args) {
        Result result = JUnitCore.runClasses(CrunchifyJunitTest.class);
        for (Failure failure : result.getFailures()) {
            System.out.println(failure.toString());
        }
        if (result.wasSuccessful()) {
            System.out.println("Both Tests finished successfully...");
        }
    }
}