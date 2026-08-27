/*
* Comments
* Comentario multilínea
*/

// Comments - comentario de una línea

package com.example.demo;

import java.util.*;
import java.util.function.*;
import java.util.regex.Pattern;


// Annotations
@Deprecated
@SuppressWarnings("unused")
public class ColorTest<T extends Number> {

    // Constants
    public static final String CONSTANT_TEXT = "CONSTANT";
    public static final int MAX_VALUE = 100;

    // Variables
    private String name;
    private int age;
    private boolean active;

    // Enum Members
    public enum Status {
        ACTIVE,
        INACTIVE,
        PENDING
    }

    // Interfaces & Type Parameters
    public interface Repository<T> {
        T findById(Long id);
        List<T> findAll();
    }

    // Classes & Types
    public static class User {
        private Long id;
        private String username;

        public User(Long id, String username) {
            this.id = id;
            this.username = username;
        }

        // Function Declaration / Method Declaration
        public String getUsername() {
            return username;
        }
    }

    // Function Declaration
    public static int calculateSum(int a, int b) {
        int result = a + b;

        // Control Flow
        if (result > 10) {
            return result;
        } else if (result == 10) {
            return 10;
        } else {
            return 0;
        }
    }

    // Function with Parameters
    public static void processUser(
            String username,
            int age,
            boolean enabled
    ) {
        System.out.println(username);
    }

    public static void main(String[] args) {

        // Variables
        String message = "Hello World";
        int number = 42;
        double decimal = 3.14159;
        boolean enabled = true;
        Object nothing = null;

        // Numbers
        int integer = 123;
        long longNumber = 123456789L;
        float floatNumber = 10.5f;
        double doubleNumber = 99.99;
        hexadecimal = 0xFF;
        
        // Function Calls
        System.out.println(message);
        int result = calculateSum(5, 10);

        // Object Properties
        User user = new User(1L, "Manu");
        String username = user.getUsername();

        // Operators
        boolean comparison = number >= 10 && enabled;
        boolean another = number != 0 || !enabled;

        int arithmetic = number + 10 * 2 - 5 / 2;

        // Control Flow - for
        for (int i = 0; i < 10; i++) {
            System.out.println(i);
        }

        // Control Flow - enhanced for
        List<String> names = Arrays.asList(
                "Manu",
                "Juan",
                "Pedro"
        );

        for (String currentName : names) {
            System.out.println(currentName);
        }

        // Control Flow - while
        int counter = 0;

        while (counter < 5) {
            counter++;
        }

        // Control Flow - switch
        Status status = Status.ACTIVE;

        switch (status) {
            case ACTIVE:
                System.out.println("Active");
                break;

            case INACTIVE:
                System.out.println("Inactive");
                break;

            case PENDING:
                System.out.println("Pending");
                break;

            default:
                System.out.println("Unknown");
        }

        // Strings
        String text = "This is a String";
        String escaped = "String with \"quotes\" and\nnew line";

        // Escape Characters
        String escapes = "\n\t\r\\\"\'";

        // Regular Expressions
        String regex = "^[a-zA-Z0-9_]+$";
        Pattern pattern = Pattern.compile(regex);

        // Collections / Generic Types
        List<String> list = new ArrayList<>();
        Map<String, Integer> map = new HashMap<>();

        list.add("Java");
        list.add("TypeScript");

        map.put("Java", 1);
        map.put("Python", 2);

        // Lambda / Function-like expressions
        Predicate<String> isLong =
                value -> value.length() > 5;

        Function<String, String> upper =
                value -> value.toUpperCase();

        // Function Calls
        boolean valid = isLong.test("Hello World");
        String upperText = upper.apply("hello");

        // Ternary Operator
        String resultText =
                enabled ? "Enabled" : "Disabled";

        // try / catch / finally
        try {
            int value = Integer.parseInt("123");
            System.out.println(value);
        } catch (NumberFormatException exception) {
            System.err.println(exception.getMessage());
        } finally {
            System.out.println("Finished");
        }

        // throw
        if (number < 0) {
            throw new IllegalArgumentException(
                    "Number cannot be negative"
            );
        }
    }


    // Method Override
    @Override
    public String toString() {
        return "ColorTest{name='" + name + "'}";
    }


    // Deprecated
    /**
     * @deprecated Use another method instead.
     */
    @Deprecated
    public void oldMethod() {
        System.out.println("Deprecated method");
    }
}


/*
 * ============================================================
 * TOKENS NOT APPLICABLE TO JAVA
 * ============================================================
 *
 * Template Literals
 * Template Expression Punctuation
 * Namespaces & Modules       -> Java uses packages/imports
 * Object Keys                -> Java doesn't have JS object literals
 * Object Properties          -> Java has fields/methods instead
 * Tags (HTML/XML)            -> HTML/XML, not Java
 * Attributes                 -> HTML/XML, not Java
 * CSS Properties             -> CSS, not Java
 * JSX / TSX Components       -> React/TypeScript, not Java
 *
 */