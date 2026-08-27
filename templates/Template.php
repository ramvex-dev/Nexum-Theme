<?php

/*
 * ============================================================
 * PHP SYNTAX COLOR TEST
 * ============================================================
 * Archivo diseñado para probar los diferentes tokens de
 * coloreado de sintaxis en Visual Studio Code.
 * ============================================================
 */


// ============================================================
// Comments
// ============================================================

// Comentario de una línea

/*
 * Comentario multilínea
 *
 * TODO: revisar esta función
 * FIXME: corregir este comportamiento
 * NOTE: información importante
 */


// ============================================================
// PHP Tags
// ============================================================

<?php
echo "PHP";


// Short echo tag
<?= "Hello World" ?>

<?php


// ============================================================
// Namespaces & Modules
// ============================================================

namespace App\Services;


// ============================================================
// Imports
// ============================================================

use App\Models\User;

use App\Repositories\UserRepository;

use DateTime;

use Exception;

use RuntimeException;


// ============================================================
// Constants
// ============================================================

const APPLICATION_NAME = "PHP Color Test";

const API_VERSION = "v1";

const MAX_USERS = 100;

define(
    "DEFAULT_TIMEOUT",
    3000
);


// ============================================================
// Variables
// ============================================================

$name = "Manu";

$age = 30;

$active = true;

$data = null;

$result = 100;

$user = null;


// ============================================================
// Strings
// ============================================================

$singleString = 'Hello World';

$doubleString = "Hello World";

$escapedString =
    "He said: \"Hello\"";

$singleEscapedString =
    'It\'s PHP';


// ============================================================
// Template / Interpolated Strings
// ============================================================

$username = "Manu";

$userAge = 30;

$message =
    "Hello $username";

$messageBraces =
    "Hello {$username}";

$messageExpression =
    "Age: {$userAge}";

$messageProperty =
    "Name: {$user->name}";

$messageArray =
    "User: {$user['name']}";


// ============================================================
// Heredoc
// ============================================================

$heredoc = <<<TEXT
Hello $username.

This is a multiline string.

Age: {$userAge}
TEXT;


// ============================================================
// Nowdoc
// ============================================================

$nowdoc = <<<'TEXT'
Hello $username.

This is a Nowdoc string.

Variables are NOT interpolated here.
TEXT;


// ============================================================
// Numbers
// ============================================================

$integer = 123;

$negativeNumber = -123;

$float = 123.456;

$scientific = 1.23e10;

$hexadecimal = 0xFF;

$binary = 0b101010;

$octal = 0755;

$separatorNumber = 1_000_000;


// ============================================================
// Language Constants
// ============================================================

$trueValue = true;

$falseValue = false;

$nullValue = null;

$notANumber = NAN;

$infinity = INF;

$directory = __DIR__;

$file = __FILE__;

$line = __LINE__;

$function = __FUNCTION__;

$class = __CLASS__;

$method = __METHOD__;

$namespace = __NAMESPACE__;


// ============================================================
// Escape Characters
// ============================================================

$newline =
    "Line 1\nLine 2";

$tab =
    "Column 1\tColumn 2";

$carriageReturn =
    "Text\r";

$backslash =
    "C:\\Users\\Manu";

$quote =
    "\"Hello\"";

$singleQuote =
    'It\'s PHP';

$unicode =
    "\u{00A9}";


// ============================================================
// Function Declarations
// ============================================================

function helloWorld(): string
{
    return "Hello World";
}


function calculateSum(
    int $a,
    int $b
): int {

    return $a + $b;
}


function processUser(
    string $username,
    int $age,
    bool $active = true
): string {

    return "{$username}: {$age}";
}


// ============================================================
// Function Parameters
// ============================================================

function parametersExample(
    string $requiredParameter,
    ?int $optionalParameter = null,
    bool $defaultParameter = true,
    mixed ...$restParameters
): void {

    var_dump(
        $requiredParameter,
        $optionalParameter,
        $defaultParameter,
        $restParameters
    );
}


// ============================================================
// Function Calls
// ============================================================

helloWorld();

calculateSum(
    10,
    20
);

processUser(
    "Manu",
    30
);

echo "Hello World";


// ============================================================
// Control Flow
// ============================================================

if ($age >= 18) {

    $status = "adult";

} elseif ($age >= 13) {

    $status = "teenager";

} else {

    $status = "child";
}


// ============================================================
// For Loop
// ============================================================

for ($i = 0; $i < 10; $i++) {

    echo $i;
}


// ============================================================
// Foreach
// ============================================================

$names = [
    "Manu",
    "Juan",
    "Pedro"
];


foreach ($names as $currentName) {

    echo $currentName;
}


foreach ($names as $index => $currentName) {

    echo "{$index}: {$currentName}";
}


// ============================================================
// While
// ============================================================

$counter = 0;

while ($counter < 5) {

    $counter++;
}


// ============================================================
// Do While
// ============================================================

do {

    $counter--;

} while ($counter > 0);


// ============================================================
// Break / Continue
// ============================================================

foreach (range(1, 20) as $number) {

    if ($number % 2 === 0) {

        continue;
    }

    if ($number > 15) {

        break;
    }

    echo $number;
}


// ============================================================
// Match
// ============================================================

$status = "active";


$result = match ($status) {

    "active" =>
        "ACTIVE",

    "inactive" =>
        "INACTIVE",

    "pending" =>
        "PENDING",

    default =>
        "UNKNOWN"
};


// ============================================================
// Classes & Types
// ============================================================

class User
{
    public int $id;

    public string $username;

    private string $email;

    protected bool $active;


    public function __construct(
        int $id,
        string $username,
        string $email,
        bool $active = true
    ) {

        $this->id = $id;

        $this->username = $username;

        $this->email = $email;

        $this->active = $active;
    }


    public function getUsername(): string
    {
        return $this->username;
    }


    public function setEmail(
        string $email
    ): void {

        $this->email = $email;
    }


    public function isActive(): bool
    {
        return $this->active;
    }
}


// ============================================================
// Class Instantiation
// ============================================================

$user = new User(
    1,
    "Manu",
    "manu@example.com"
);


$user->username;

$user->getUsername();


// ============================================================
// Interfaces & Type Parameters
// ============================================================

interface Repository
{
    public function findById(
        int $id
    ): ?User;


    public function findAll(): array;


    public function save(
        User $user
    ): User;
}


// ============================================================
// Generic-style PHPDoc
// ============================================================

/**
 * @template T
 */
interface GenericRepository
{
    /**
     * @param int $id
     * @return T|null
     */
    public function findById(
        int $id
    ): mixed;
}


// ============================================================
// Interface Implementation
// ============================================================

class UserRepository
    implements Repository
{

    public function findById(
        int $id
    ): ?User {

        return null;
    }


    public function findAll(): array
    {
        return [];
    }


    public function save(
        User $user
    ): User {

        return $user;
    }
}


// ============================================================
// Abstract Classes
// ============================================================

abstract class BaseService
{
    abstract public function
        execute(): void;


    protected function log(
        string $message
    ): void {

        echo $message;
    }
}


class UserService
    extends BaseService
{

    public function execute(): void
    {
        $this->log(
            "Executing UserService"
        );
    }
}


// ============================================================
// Traits
// ============================================================

trait Loggable
{
    public function logMessage(
        string $message
    ): void {

        echo $message;
    }
}


class Application
{
    use Loggable;


    public function run(): void
    {
        $this->logMessage(
            "Application started"
        );
    }
}


// ============================================================
// Trait Conflict Resolution
// ============================================================

trait Logger
{
    public function log(): void
    {
        echo "Logger";
    }
}


trait FileLogger
{
    public function log(): void
    {
        echo "FileLogger";
    }
}


class LoggingService
{
    use Logger, FileLogger {
        Logger::log insteadof FileLogger;

        FileLogger::log as fileLog;
    }
}


// ============================================================
// Enums
// ============================================================

enum Status: string
{
    case ACTIVE = "active";

    case INACTIVE = "inactive";

    case PENDING = "pending";
}


enum HttpStatus: int
{
    case OK = 200;

    case CREATED = 201;

    case BAD_REQUEST = 400;

    case NOT_FOUND = 404;

    case INTERNAL_ERROR = 500;
}


$currentStatus =
    Status::ACTIVE;


$currentHttpStatus =
    HttpStatus::OK;


// ============================================================
// Enum Methods
// ============================================================

enum UserRole: string
{
    case ADMIN = "admin";

    case USER = "user";

    case GUEST = "guest";


    public function label(): string
    {
        return match ($this) {

            self::ADMIN =>
                "Administrator",

            self::USER =>
                "User",

            self::GUEST =>
                "Guest"
        };
    }
}


// ============================================================
// Static Members
// ============================================================

class Configuration
{
    public const VERSION = "1.0.0";

    public const MAX_USERS = 100;


    public static string $environment =
        "development";


    public static function
        getVersion(): string
    {

        return self::VERSION;
    }
}


Configuration::$environment;

Configuration::getVersion();


// ============================================================
// Access Modifiers
// ============================================================

class AccessExample
{
    public string $publicValue =
        "public";

    private string $privateValue =
        "private";

    protected string $protectedValue =
        "protected";

    public readonly string $readonlyValue;


    public function __construct()
    {
        $this->readonlyValue =
            "readonly";
    }
}


// ============================================================
// Readonly Class
// ============================================================

readonly class ImmutableUser
{
    public function __construct(
        public int $id,
        public string $username
    ) {}
}


// ============================================================
// Constructor Property Promotion
// ============================================================

class Product
{
    public function __construct(

        public int $id,

        public string $name,

        private float $price,

        protected string $category

    ) {}
}


// ============================================================
// Type Declarations
// ============================================================

$stringValue = "text";

$numberValue = 123;

$floatValue = 19.99;

$booleanValue = true;

$arrayValue = [];

$objectValue = new stdClass();

$nullValue = null;


// Union Types
function getValue(
    int|string $value
): int|string {

    return $value;
}


// Nullable Type
function findUser(
    int $id
): ?User {

    return null;
}


// Mixed
function processData(
    mixed $data
): mixed {

    return $data;
}


// Never
function terminate(
    string $message
): never {

    throw new RuntimeException(
        $message
    );
}


// ============================================================
// Object Properties
// ============================================================

$user->id;

$user->username;

$user->email;

$user->active;

$user->getUsername();


// ============================================================
// Object Keys
// ============================================================

$userData = [

    "id" => 1,

    "username" => "Manu",

    "email" => "manu@example.com",

    "active" => true,

    "address" => [

        "street" => "Main Street",

        "city" => "Madrid",

        "country" => "Spain"
    ]
];


$userData["username"];

$userData["email"];

$userData["address"]["city"];


// ============================================================
// Arrays
// ============================================================

$numbers = [
    1,
    2,
    3,
    4,
    5
];


$associativeArray = [

    "name" => "Manu",

    "age" => 30,

    "active" => true
];


// ============================================================
// Array Functions
// ============================================================

$mapped = array_map(
    fn (int $number): int =>
        $number * 2,
    $numbers
);


$filtered = array_filter(
    $numbers,
    fn (int $number): bool =>
        $number % 2 === 0
);


$reduced = array_reduce(
    $numbers,
    fn (
        int $carry,
        int $number
    ): int =>
        $carry + $number,
    0
);


// ============================================================
// Arrow Functions
// ============================================================

$add =
    fn (int $a, int $b): int =>
        $a + $b;


$multiply =
    fn (int $a, int $b): int =>
        $a * $b;


$result =
    $add(10, 20);


// ============================================================
// Operators
// ============================================================

$addition = 10 + 5;

$subtraction = 10 - 5;

$multiplication = 10 * 5;

$division = 10 / 5;

$modulo = 10 % 3;

$power = 2 ** 3;


$equal = 10 == "10";

$strictEqual = 10 === 10;

$notEqual = 10 != 5;

$strictNotEqual = 10 !== 5;

$greater = 10 > 5;

$less = 5 < 10;

$greaterEqual = 10 >= 10;

$lessEqual = 5 <= 10;


$and = true && true;

$or = true || false;

$not = !true;


// PHP-specific logical operators

$logicalAnd = true and true;

$logicalOr = false or true;

$logicalXor = true xor false;


// Null coalescing

$defaultName =
    $username ?? "Unknown";


// Null coalescing assignment

$username ??= "Unknown";


// Spaceship operator

$comparison =
    10 <=> 20;


// String concatenation

$fullName =
    "Manu" . " " . "Ramos";


// ============================================================
// Assignment Operators
// ============================================================

$value = 10;

$value += 5;

$value -= 2;

$value *= 3;

$value /= 2;

$value %= 3;

$value **= 2;

$value .= " text";


// ============================================================
// Increment / Decrement
// ============================================================

$value++;

$value--;

++$value;

--$value;


// ============================================================
// Ternary Operator
// ============================================================

$statusText =
    $active
        ? "ACTIVE"
        : "INACTIVE";


// Elvis Operator

$displayName =
    $username ?: "Unknown";


// ============================================================
// Spread Operator
// ============================================================

$firstArray = [
    1,
    2,
    3
];


$secondArray = [

    ...$firstArray,

    4,

    5
];


// ============================================================
// Argument Unpacking
// ============================================================

function add(
    int $a,
    int $b,
    int $c
): int {

    return $a + $b + $c;
}


$values = [
    10,
    20,
    30
];


$sum = add(
    ...$values
);


// ============================================================
// Destructuring
// ============================================================

[
    $firstName,
    $lastName
] = [
    "Manu",
    "Ramos"
];


[
    "name" => $destructuredName,
    "age" => $destructuredAge
] = $userData;


// ============================================================
// Exceptions
// ============================================================

try {

    $result =
        calculateSum(
            10,
            20
        );

} catch (
    RuntimeException $exception
) {

    echo $exception->getMessage();

} catch (
    Exception $exception
) {

    echo $exception->getMessage();

} finally {

    echo "Finished";
}


// ============================================================
// Throw
// ============================================================

function validateAge(
    int $age
): bool {

    if ($age < 0) {

        throw new InvalidArgumentException(
            "Age cannot be negative"
        );
    }

    return true;
}


// ============================================================
// Anonymous Classes
// ============================================================

$anonymousService =
    new class
    {
        public function execute():
            string {

            return "Executed";
        }
    };


// ============================================================
// Closures
// ============================================================

$closure =
    function (
        string $name
    ): string {

        return "Hello {$name}";
    };


$closure("Manu");


// ============================================================
// Regular Expressions
// ============================================================

$pattern =
    '/^[a-zA-Z0-9_]+$/';


$emailPattern =
    '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';


$isValid =
    preg_match(
        $pattern,
        "Manu123"
    );


$matches = [];

preg_match(
    $emailPattern,
    "manu@example.com",
    $matches
);


// ============================================================
// Attributes
// ============================================================

#[Attribute]
class ExampleAttribute
{
    public function __construct(
        public string $value
    ) {}
}


#[ExampleAttribute("test")]
class DecoratedUser
{
    #[ExampleAttribute("property")]
    public string $name;


    #[ExampleAttribute("method")]
    public function execute(): void
    {
        echo "Executed";
    }
}


// ============================================================
// PHPDoc / Annotations
// ============================================================

/**
 * @param string $name
 * @param int $age
 *
 * @return string
 *
 * @throws InvalidArgumentException
 *
 * @deprecated Use processUser() instead.
 */
function oldFunction(
    string $name,
    int $age
): string {

    return "{$name}: {$age}";
}


// ============================================================
// Generators
// ============================================================

function generateNumbers(
    int $max
): Generator {

    for ($i = 0; $i < $max; $i++) {

        yield $i;
    }
}


foreach (
    generateNumbers(10)
    as $number
) {

    echo $number;
}


// ============================================================
// SQL / Embedded Strings
// ============================================================

$sql = <<<SQL
SELECT
    id,
    username,
    email
FROM users
WHERE active = 1
ORDER BY username ASC
SQL;


// ============================================================
// JSON
// ============================================================

$json = <<<JSON
{
    "id": 1,
    "username": "Manu",
    "active": true,
    "roles": [
        "admin",
        "user"
    ]
}
JSON;


// ============================================================
// HTML Embedded in PHP
// ============================================================

?>

<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <title>
        PHP Syntax Test
    </title>

</head>

<body>

    <div
        class="container"
        id="main"
        data-value="123"
    >

        <h1>
            <?= htmlspecialchars($username) ?>
        </h1>

        <p>
            Hello World
        </p>

    </div>

</body>

</html>

<?php


// ============================================================
// HTML Attributes
// ============================================================

$html = <<<HTML
<div
    class="container"
    id="user"
    data-user-id="123"
>
    Hello
</div>
HTML;


// ============================================================
// CSS Embedded in HTML
// ============================================================

$css = <<<CSS
.container {
    color: red;
    background-color: white;
    font-size: 16px;
    margin: 10px;
    padding: 20px;
}
CSS;


// ============================================================
// Deprecated / Invalid
// ============================================================

// Código inválido intencionadamente comentado:
//
// $invalid =
//
// function invalidFunction(
//
// class Invalid {
//
// if true
//
// $x = [;
//
//
//
// Deprecated:
//
// mysql_connect();
//
// mysql_query();
//
// create_function();


// ============================================================
// Magic Methods
// ============================================================

class MagicExample
{
    private array $data = [];


    public function __construct()
    {
        $this->data = [];
    }


    public function __get(
        string $name
    ): mixed {

        return $this->data[$name]
            ?? null;
    }


    public function __set(
        string $name,
        mixed $value
    ): void {

        $this->data[$name] =
            $value;
    }


    public function __isset(
        string $name
    ): bool {

        return isset(
            $this->data[$name]
        );
    }


    public function __unset(
        string $name
    ): void {

        unset(
            $this->data[$name]
        );
    }


    public function __toString():
        string {

        return "MagicExample";
    }


    public function __invoke(
        string $value
    ): string {

        return $value;
    }
}


// ============================================================
// Main
// ============================================================

function main(): void
{
    $user = new User(
        1,
        "Manu",
        "manu@example.com"
    );


    echo $user->getUsername();


    echo calculateSum(
        10,
        20
    );
}


main();