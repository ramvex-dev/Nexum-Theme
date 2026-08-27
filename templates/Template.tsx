// @ts-nocheck
/*
 * ============================================================
 * TSX SYNTAX COLOR TEST
 * ============================================================
 * Archivo diseñado para probar los diferentes tokens de
 * coloreado de sintaxis en Visual Studio Code.
 *
 * TypeScript + JSX / React
 * ============================================================
 */


// ============================================================
// Comments
// ============================================================

// Comentario de una línea

/*
 * Comentario multilínea
 *
 * TODO: revisar componente
 * FIXME: corregir comportamiento
 * NOTE: información importante
 */


// ============================================================
// Imports
// ============================================================

/* eslint-disable */
import React from "react";

import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type FC,
    type ReactNode,
    type ChangeEvent
} from "react";

import type {
    User,
    UserRole
} from "./types";

import {
    UserService
} from "./services/UserService";


// ============================================================
// Constants
// ============================================================

const APPLICATION_NAME =
    "TSX Color Test";

const API_VERSION =
    "v1";

const MAX_USERS =
    100;

const DEFAULT_TIMEOUT =
    3000;


// ============================================================
// Variables
// ============================================================

let currentUser:
    User | null = null;

let isLoading:
    boolean = false;

let username:
    string = "Manu";

let age:
    number = 30;


// ============================================================
// Primitive Types
// ============================================================

const stringValue:
    string = "Hello";

const numberValue:
    number = 123;

const booleanValue:
    boolean = true;

const nullValue:
    null = null;

const undefinedValue:
    undefined = undefined;

const unknownValue:
    unknown = "Unknown";

const anyValue:
    any = "Anything";


// ============================================================
// Strings
// ============================================================

const singleString =
    'Hello World';

const doubleString =
    "Hello World";

const escapedString =
    "He said: \"Hello\"";

const newlineString =
    "Line 1\nLine 2";


// ============================================================
// Template Literals
// ============================================================

const message =
    `Hello ${username}`;

const userMessage =
    `User: ${username}, Age: ${age}`;

const calculatedMessage =
    `Result: ${10 + 20}`;

const conditionalMessage =
    `Status: ${
        age >= 18
            ? "adult"
            : "minor"
    }`;


// ============================================================
// Numbers
// ============================================================

const integer =
    123;

const decimal =
    123.456;

const negative =
    -123;

const hexadecimal =
    0xFF;

const binary =
    0b101010;

const octal =
    0o755;

const scientific =
    1.23e10;

const bigInteger =
    12345678901234567890n;

const separatorNumber =
    1_000_000;


// ============================================================
// Language Constants
// ============================================================

const trueValue =
    true;

const falseValue =
    false;

const nullValue2 =
    null;

const undefinedValue2 =
    undefined;

const nanValue =
    NaN;

const infinityValue =
    Infinity;


// ============================================================
// Interfaces
// ============================================================

interface UserProps {

    id: number;

    username: string;

    email?: string;

    active: boolean;

    role: UserRole;
}


interface ButtonProps {

    children:
        ReactNode;

    disabled?:
        boolean;

    onClick?:
        () => void;

    variant?:
        "primary"
        | "secondary"
        | "danger";
}


interface InputProps {

    value: string;

    placeholder?:
        string;

    onChange:
        (
            event:
                ChangeEvent<HTMLInputElement>
        ) => void;
}


// ============================================================
// Type Aliases
// ============================================================

type Status =
    | "active"
    | "inactive"
    | "pending";


type Size =
    | "small"
    | "medium"
    | "large";


type UserId =
    number;


type Nullable<T> =
    T | null;


type ComponentProps =
    ButtonProps & {

        className?:
            string;
    };


// ============================================================
// Enums
// ============================================================

enum UserRole {

    ADMIN =
        "admin",

    USER =
        "user",

    GUEST =
        "guest"
}


enum HttpStatus {

    OK = 200,

    CREATED = 201,

    BAD_REQUEST = 400,

    NOT_FOUND = 404,

    SERVER_ERROR = 500
}


// ============================================================
// Generic Types
// ============================================================

interface ApiResponse<T> {

    data: T;

    status:
        number;

    message?:
        string;
}


function identity<T>(
    value: T
): T {

    return value;
}


const stringResult =
    identity<string>(
        "Hello"
    );


const numberResult =
    identity<number>(
        123
    );


// ============================================================
// Functions
// ============================================================

function calculateSum(
    a: number,
    b: number
): number {

    return a + b;
}


function formatUsername(
    name: string
): string {

    return name
        .trim()
        .toUpperCase();
}


// ============================================================
// Arrow Functions
// ============================================================

const add =
    (
        a: number,
        b: number
    ): number =>
        a + b;


const multiply =
    (
        a: number,
        b: number
    ): number =>
        a * b;


const greet =
    (
        name: string
    ): string =>
        `Hello ${name}`;


// ============================================================
// Arrays
// ============================================================

const users:
    UserProps[] = [];


const languages:
    Array<string> = [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java"
    ];


// ============================================================
// Objects
// ============================================================

const user:
    UserProps = {

    id: 1,

    username: "Manu",

    email:
        "manu@example.com",

    active: true,

    role:
        UserRole.ADMIN
};


const configuration = {

    apiUrl:
        "https://example.com",

    timeout:
        3000,

    debug:
        true
};


// ============================================================
// Destructuring
// ============================================================

const {
    id,
    username: userName,
    email
} = user;


const [
    first,
    second,
    third
] = [
    "one",
    "two",
    "three"
];


// ============================================================
// Spread Operator
// ============================================================

const updatedUser = {

    ...user,

    active:
        false
};


const allLanguages = [

    ...languages,

    "C#",

    "Go"
];


// ============================================================
// Optional Chaining
// ============================================================

const userEmail =
    user?.email;

const userName2 =
    currentUser?.username;

const nestedValue =
    currentUser
        ?.profile
        ?.address
        ?.city;


// ============================================================
// Nullish Coalescing
// ============================================================

const displayName =
    user.email
    ?? "No email";


// ============================================================
// Operators
// ============================================================

const addition =
    10 + 5;

const subtraction =
    10 - 5;

const multiplication =
    10 * 5;

const division =
    10 / 5;

const remainder =
    10 % 3;

const exponentiation =
    2 ** 3;


const equality =
    10 == "10";

const strictEquality =
    10 === 10;

const inequality =
    10 != 5;

const strictInequality =
    10 !== 5;


const greater =
    10 > 5;

const less =
    5 < 10;

const greaterEqual =
    10 >= 10;

const lessEqual =
    5 <= 10;


const logicalAnd =
    true && true;

const logicalOr =
    true || false;

const logicalNot =
    !true;


// ============================================================
// Ternary
// ============================================================

const statusText =
    user.active
        ? "ACTIVE"
        : "INACTIVE";


// ============================================================
// React Components
// ============================================================

function HelloWorld(): JSX.Element {

    return (
        <div>
            Hello World
        </div>
    );
}


// ============================================================
// Functional Component
// ============================================================

const Greeting =
    (): JSX.Element => {

        return (
            <div>
                Hello {username}
            </div>
        );
    };


// ============================================================
// Component Props
// ============================================================

interface GreetingProps {

    name: string;

    age: number;

    active?: boolean;
}


function GreetingUser(
    {
        name,
        age,
        active = true
    }: GreetingProps
): JSX.Element {

    return (

        <div>

            <h1>
                Hello {name}
            </h1>

            <p>
                Age: {age}
            </p>

            <p>
                Status:
                {" "}
                {active
                    ? "Active"
                    : "Inactive"}
            </p>

        </div>
    );
}


// ============================================================
// JSX Elements
// ============================================================

const element = (

    <div>

        <h1>
            Hello World
        </h1>

        <p>
            This is a paragraph.
        </p>

        <button>
            Click me
        </button>

    </div>
);


// ============================================================
// JSX Tags
// ============================================================

const tags = (

    <section>

        <header>

            <h1>
                Application
            </h1>

        </header>

        <main>

            <article>

                <h2>
                    Content
                </h2>

                <p>
                    Example content
                </p>

            </article>

        </main>

        <footer>

            Footer

        </footer>

    </section>
);


// ============================================================
// JSX Attributes
// ============================================================

const attributes = (

    <div

        id="main-container"

        className="container"

        title="Example"

        data-testid="test"

        aria-label="Main content"

        role="main"

        hidden={false}

    >

        Content

    </div>
);


// ============================================================
// JSX Boolean Attributes
// ============================================================

const button = (

    <button

        disabled

        autoFocus

        formNoValidate

        type="button"

    >

        Click

    </button>
);


// ============================================================
// JSX Expression Containers
// ============================================================

const expressions = (

    <div>

        {username}

        {age}

        {true}

        {null}

        {calculateSum(10, 20)}

        {user.username}

        {user.active
            ? "Active"
            : "Inactive"}

    </div>
);


// ============================================================
// JSX JavaScript Expressions
// ============================================================

const expressionList = (

    <ul>

        {languages.map(
            language => (

                <li
                    key={language}
                >

                    {language}

                </li>
            )
        )}

    </ul>
);


// ============================================================
// JSX Conditional Rendering
// ============================================================

function UserStatus(
    {
        active
    }: {
        active: boolean
    }
): JSX.Element {

    return (

        <div>

            {active && (

                <span>
                    User is active
                </span>

            )}

            {!active && (

                <span>
                    User is inactive
                </span>

            )}

        </div>
    );
}


// ============================================================
// JSX Ternary
// ============================================================

function StatusComponent(
    {
        active
    }: {
        active: boolean
    }
): JSX.Element {

    return (

        <div>

            {active
                ? (
                    <span>
                        Active
                    </span>
                )
                : (
                    <span>
                        Inactive
                    </span>
                )}

        </div>
    );
}


// ============================================================
// JSX Fragments
// ============================================================

function FragmentExample():
    JSX.Element {

    return (

        <>

            <h1>
                Title
            </h1>

            <p>
                Content
            </p>

        </>

    );
}


// ============================================================
// JSX Self Closing Elements
// ============================================================

const selfClosing = (

    <div>

        <img
            src="/image.png"
            alt="Example"
        />

        <input
            type="text"
            name="username"
        />

        <UserIcon />

    </div>
);


// ============================================================
// React Component
// ============================================================

function UserCard(
    {
        id,
        username,
        email,
        active,
        role
    }: UserProps
): JSX.Element {

    return (

        <article
            className="user-card"
            data-user-id={id}
        >

            <header>

                <h2>
                    {username}
                </h2>

            </header>

            <div>

                <p>
                    Email: {email}
                </p>

                <p>
                    Role: {role}
                </p>

                <p>
                    Status:
                    {" "}
                    {active
                        ? "Active"
                        : "Inactive"}
                </p>

            </div>

        </article>
    );
}


// ============================================================
// Component with Props
// ============================================================

function Button(
    {
        children,
        disabled = false,
        onClick,
        variant = "primary",
        className
    }: ButtonProps
): JSX.Element {

    return (

        <button

            className={
                `${variant} ${className ?? ""}`
            }

            disabled={disabled}

            onClick={onClick}

        >

            {children}

        </button>
    );
}


// ============================================================
// Input Component
// ============================================================

function Input(
    {
        value,
        placeholder,
        onChange
    }: InputProps
): JSX.Element {

    return (

        <input

            type="text"

            value={value}

            placeholder={placeholder}

            onChange={onChange}

        />
    );
}


// ============================================================
// React Hooks
// ============================================================

function UserComponent(): JSX.Element {

    const [
        count,
        setCount
    ] = useState<number>(0);


    const [
        user,
        setUser
    ] = useState<
        UserProps | null
    >(null);


    const inputRef =
        useRef<
            HTMLInputElement
            | null
        >(null);


    useEffect(() => {

        console.log(
            "Component mounted"
        );

    }, []);


    const doubled =
        useMemo(
            () => count * 2,
            [count]
        );


    return (

        <div>

            <p>
                Count: {count}
            </p>

            <p>
                Doubled: {doubled}
            </p>

            <button
                onClick={() =>
                    setCount(
                        count + 1
                    )
                }
            >

                Increment

            </button>

        </div>
    );
}


// ============================================================
// Event Handlers
// ============================================================

function EventExample(): JSX.Element {

    const handleClick =
        (
            event:
                React.MouseEvent<
                    HTMLButtonElement
                >
        ): void => {

            console.log(
                event.currentTarget
            );
        };


    const handleChange =
        (
            event:
                ChangeEvent<
                    HTMLInputElement
                >
        ): void => {

            console.log(
                event.target.value
            );
        };


    return (

        <div>

            <button
                onClick={handleClick}
            >

                Click

            </button>


            <input
                onChange={handleChange}
            />

        </div>
    );
}


// ============================================================
// Generic React Component
// ============================================================

interface ListProps<T> {

    items: T[];

    renderItem:
        (item: T) => ReactNode;
}


function List<T>(
    {
        items,
        renderItem
    }: ListProps<T>
): JSX.Element {

    return (

        <ul>

            {items.map(
                (
                    item,
                    index
                ) => (

                    <li key={index}>

                        {renderItem(item)}

                    </li>

                )
            )}

        </ul>
    );
}


// ============================================================
// Using Generic Component
// ============================================================

const userList = (

    <List<UserProps>

        items={users}

        renderItem={
            user => (
                <span>
                    {user.username}
                </span>
            )
        }

    />

);


// ============================================================
// JSX Namespaced Components
// ============================================================

const namespacedComponent = (

    <React.Fragment>

        <React.StrictMode>

            <Greeting />

        </React.StrictMode>

    </React.Fragment>
);


// ============================================================
// JSX Spread Attributes
// ============================================================

const buttonProps = {

    disabled: false,

    type: "button" as const,

    className: "primary"
};


const spreadComponent = (

    <button

        {...buttonProps}

    >

        Click

    </button>
);


// ============================================================
// Type Assertions
// ============================================================

const unknownData:
    unknown = "Hello";


const stringData =
    unknownData as string;


const inputElement =
    document.querySelector(
        "#username"
    ) as HTMLInputElement;


// ============================================================
// `satisfies` Operator
// ============================================================

const config = {

    apiUrl:
        "https://example.com",

    timeout:
        3000,

    retries:
        3

} satisfies {

    apiUrl: string;

    timeout: number;

    retries: number;
};


// ============================================================
// `typeof` / `keyof`
// ============================================================

type Config =
    typeof config;


type ConfigKey =
    keyof Config;


const configKey:
    ConfigKey = "apiUrl";


// ============================================================
// Utility Types
// ============================================================

type PartialUser =
    Partial<UserProps>;


type RequiredUser =
    Required<UserProps>;


type ReadonlyUser =
    Readonly<UserProps>;


type UserWithoutRole =
    Omit<UserProps, "role">;


type UserOnlyName =
    Pick<UserProps, "username">;


type UserRecord =
    Record<string, UserProps>;


// ============================================================
// Regular Expressions
// ============================================================

const usernameRegex =
    /^[a-zA-Z0-9_]+$/;


const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const validUsername =
    usernameRegex.test(
        username
    );


// ============================================================
// Error Handling
// ============================================================

try {

    throw new Error(
        "Example error"
    );

} catch (error) {

    console.error(
        error
    );

} finally {

    console.log(
        "Finished"
    );
}


// ============================================================
// Async / Await
// ============================================================

async function fetchUser(
    id: number
): Promise<UserProps> {

    const response =
        await fetch(
            `/api/users/${id}`
        );


    const data:
        UserProps =
        await response.json();


    return data;
}


// ============================================================
// Promise
// ============================================================

const promise =
    new Promise<string>(
        (
            resolve,
            reject
        ) => {

            const success =
                true;


            if (success) {

                resolve(
                    "Success"
                );

            } else {

                reject(
                    new Error(
                        "Failed"
                    )
                );
            }
        }
    );


// ============================================================
// Decorators
// ============================================================

function Component(
    metadata: object
) {

    return function (
        target: Function
    ) {

        console.log(
            target,
            metadata
        );
    };
}


@Component({
    selector:
        "app-user"
})
class DecoratedComponent {

    render(): JSX.Element {

        return (
            <div>
                Decorated
            </div>
        );
    }
}


// ============================================================
// JSX + HTML Semantic Tags
// ============================================================

function Page(): JSX.Element {

    return (

        <html>

            <head>

                <title>
                    TypeScript JSX
                </title>

            </head>

            <body>

                <header>

                    <nav>

                        <a
                            href="/"
                            title="Home"
                        >

                            Home

                        </a>

                    </nav>

                </header>


                <main>

                    <section
                        id="content"
                        className="container"
                    >

                        <h1>
                            Application
                        </h1>

                        <p>
                            Hello World
                        </p>

                    </section>

                </main>


                <footer>

                    Copyright © 2026

                </footer>

            </body>

        </html>
    );
}


// ============================================================
// JSX Style Object
// ============================================================

const styleExample = (

    <div

        style={{

            color: "red",

            backgroundColor:
                "white",

            fontSize: "16px",

            margin: "10px",

            padding: "20px",

            border:
                "1px solid black"

        }}

    >

        Styled content

    </div>
);


// ============================================================
// CSS Class Names
// ============================================================

const cssExample = (

    <div

        className="
            container
            user-card
            active
            primary
        "

    >

        Content

    </div>
);


// ============================================================
// Data Attributes
// ============================================================

const dataAttributes = (

    <div

        data-testid="user-card"

        data-user-id={user.id}

        data-status={
            user.active
                ? "active"
                : "inactive"
        }

    >

        {user.username}

    </div>
);


// ============================================================
// ARIA Attributes
// ============================================================

const ariaExample = (

    <button

        aria-label="Close"

        aria-expanded={false}

        aria-hidden={false}

        aria-controls="dialog"

        role="button"

    >

        Close

    </button>
);


// ============================================================
// Invalid / Deprecated
// ============================================================

// Código inválido intencionadamente comentado:
//
// const invalid =
//
// function invalidFunction(
//
// interface Invalid {
//
// const x = {;
//
//
//
// Deprecated:
//
// componentWillMount();
//
// componentWillReceiveProps();
//
// findDOMNode();


// ============================================================
// Main Application
// ============================================================

function App(): JSX.Element {

    const handleButtonClick =
        (): void => {

            console.log(
                "Button clicked"
            );
        };


    return (

        <div
            id="app"
            className="application"
        >

            <header>

                <h1>
                    {APPLICATION_NAME}
                </h1>

                <p>
                    Version: {API_VERSION}
                </p>

            </header>


            <main>

                <Greeting />

                <GreetingUser

                    name="Manu"

                    age={30}

                    active={true}

                />


                <UserCard

                    id={user.id}

                    username={
                        user.username
                    }

                    email={
                        user.email
                    }

                    active={
                        user.active
                    }

                    role={
                        user.role
                    }

                />


                <Button

                    variant="primary"

                    disabled={false}

                    onClick={
                        handleButtonClick
                    }

                >

                    Click me

                </Button>


                <UserComponent />

                <EventExample />

            </main>


            <footer>

                <p>
                    © 2026
                </p>

            </footer>

        </div>
    );
}


export default App;