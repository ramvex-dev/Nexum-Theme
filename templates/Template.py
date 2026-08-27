"""
============================================================
PYTHON SYNTAX COLOR TEST
============================================================
Archivo diseñado para probar los diferentes tokens de
coloreado de sintaxis en Visual Studio Code.
============================================================
"""

# ============================================================
# Comments
# ============================================================

# Comentario de una línea

"""
Comentario multilínea.
También debería tener un color diferente.
"""

# TODO: comentario con TODO
# FIXME: comentario con FIXME
# NOTE: comentario con NOTE


# ============================================================
# Keywords
# ============================================================

import os
import sys
from pathlib import Path
from typing import List, Dict, Optional, TypeVar, Generic


# ============================================================
# Strings
# ============================================================

single_string = 'Hello World'

double_string = "Hello World"

multiline_string = """
This is a multiline string.
It contains several lines.
"""

raw_string = r"C:\Users\Manu\Documents\file.txt"

byte_string = b"Binary data"


# ============================================================
# Template Literals
# ============================================================
# Python no tiene Template Literals como JavaScript.
# Python utiliza f-strings.


name = "Manu"
age = 30

f_string = f"Hello {name}"

f_string_expression = f"Name: {name}, Age: {age}"

f_string_calculation = f"Result: {10 + 20}"

f_string_format = f"{age:03d}"


# ============================================================
# Template Expression Punctuation
# ============================================================
# En Python, las expresiones dentro de f-strings usan {}.

message = f"Hello {name.upper()}"

calculation = f"Result: {10 * 5 + 2}"

conditional = f"Status: {'active' if age >= 18 else 'inactive'}"


# ============================================================
# Numbers
# ============================================================

integer = 123

negative_integer = -123

float_number = 123.456

scientific_number = 1.23e10

hexadecimal = 0xFF

binary = 0b101010

octal = 0o755

complex_number = 3 + 4j

large_number = 1_000_000


# ============================================================
# Language Constants
# ============================================================

true_value = True

false_value = False

none_value = None

ellipsis_value = ...


# ============================================================
# Escape Characters
# ============================================================

newline = "Line 1\nLine 2"

tab = "Column 1\tColumn 2"

carriage_return = "Text\r"

backslash = "C:\\Users\\Manu"

quotes = "He said: \"Hello\""

single_quotes = 'It\'s Python'

unicode_character = "\u00A9"

hex_character = "\x41"


# ============================================================
# Variables
# ============================================================

name = "Manu"

counter = 10

result = 25.5

active = True

data = None


# ============================================================
# Constants
# ============================================================

MAX_VALUE = 100

MIN_VALUE = 0

API_VERSION = "v1"

DEFAULT_TIMEOUT = 30


# ============================================================
# Function Declarations
# ============================================================

def hello_world():
    """Simple function."""
    return "Hello World"


def calculate_sum(a, b):
    """Calculate the sum of two numbers."""
    return a + b


def process_user(
    username: str,
    age: int,
    active: bool = True
) -> str:
    """Process a user."""
    return f"{username}: {age}"


# ============================================================
# Function Parameters
# ============================================================

def parameters_example(
    required_parameter,
    typed_parameter: str,
    default_parameter: int = 10,
    *args,
    **kwargs
):
    return required_parameter


# ============================================================
# Function Calls
# ============================================================

hello_world()

calculate_sum(10, 20)

process_user(
    username="Manu",
    age=30
)

print("Hello World")


# ============================================================
# Control Flow
# ============================================================

if age >= 18:
    status = "adult"
elif age >= 13:
    status = "teenager"
else:
    status = "child"


# ============================================================
# For Loop
# ============================================================

for i in range(10):
    print(i)


for item in ["Python", "Java", "TypeScript"]:
    print(item)


# ============================================================
# While Loop
# ============================================================

counter = 0

while counter < 10:
    counter += 1


# ============================================================
# Break / Continue / Pass
# ============================================================

for number in range(20):

    if number == 5:
        continue

    if number == 15:
        break

    print(number)


def not_implemented():
    pass


# ============================================================
# Match / Case
# ============================================================

status = "active"

match status:

    case "active":
        print("User is active")

    case "inactive":
        print("User is inactive")

    case "pending":
        print("User is pending")

    case _:
        print("Unknown status")


# ============================================================
# Classes & Types
# ============================================================

class User:

    def __init__(
        self,
        user_id: int,
        username: str
    ):
        self.user_id = user_id
        self.username = username

    def get_username(self) -> str:
        return self.username

    def __str__(self) -> str:
        return self.username


# ============================================================
# Class Inheritance
# ============================================================

class Admin(User):

    def __init__(
        self,
        user_id: int,
        username: str,
        permissions: list[str]
    ):
        super().__init__(user_id, username)

        self.permissions = permissions

    def has_permission(
        self,
        permission: str
    ) -> bool:
        return permission in self.permissions


# ============================================================
# Interfaces & Type Parameters
# ============================================================
# Python no tiene interfaces como Java/TypeScript.
# Se utilizan normalmente ABC o Protocol.


from abc import ABC, abstractmethod


class Repository(ABC):

    @abstractmethod
    def find_by_id(self, user_id: int):
        pass

    @abstractmethod
    def find_all(self):
        pass


# ============================================================
# Generic / Type Parameters
# ============================================================

T = TypeVar("T")


class Container(Generic[T]):

    def __init__(self, value: T):
        self.value = value

    def get(self) -> T:
        return self.value


string_container = Container[str]("Hello")

integer_container = Container[int](123)


# ============================================================
# Type Annotations
# ============================================================

username: str = "Manu"

age: int = 30

price: float = 19.99

enabled: bool = True

user: Optional[User] = None

names: List[str] = []

users: Dict[str, User] = {}


# ============================================================
# Object Properties
# ============================================================

user = User(
    user_id=1,
    username="Manu"
)

user.username

user.user_id

user.get_username()


# ============================================================
# Object Keys
# ============================================================
# En Python, los diccionarios utilizan claves.


user_data = {
    "id": 1,
    "username": "Manu",
    "email": "manu@example.com",
    "active": True
}


# ============================================================
# Dictionary Access
# ============================================================

user_data["username"]

user_data["email"]

user_data.get("active")


# ============================================================
# Enum Members
# ============================================================

from enum import Enum


class Status(Enum):

    ACTIVE = "active"

    INACTIVE = "inactive"

    PENDING = "pending"


current_status = Status.ACTIVE

if current_status == Status.ACTIVE:
    print("Active")


# ============================================================
# Operators
# ============================================================

a = 10

b = 5

addition = a + b

subtraction = a - b

multiplication = a * b

division = a / b

floor_division = a // b

modulo = a % b

power = a ** b

comparison = a == b

not_equal = a != b

greater = a > b

less = a < b

greater_equal = a >= b

less_equal = a <= b

logical_and = a > 0 and b > 0

logical_or = a > 0 or b > 0

logical_not = not enabled

membership = "Python" in ["Python", "Java"]

identity = a is b


# ============================================================
# Assignment Operators
# ============================================================

value = 10

value += 5

value -= 2

value *= 3

value /= 2

value //= 2

value %= 3

value **= 2


# ============================================================
# Punctuation & Brackets
# ============================================================

items = [
    "one",
    "two",
    "three"
]

data = {
    "name": "Manu",
    "age": 30
}

coordinates = (
    10,
    20
)

result = calculate_sum(
    10,
    20
)


# ============================================================
# List / Set / Dictionary Comprehensions
# ============================================================

numbers = [1, 2, 3, 4, 5]

squares = [
    number ** 2
    for number in numbers
]

even_numbers = [
    number
    for number in numbers
    if number % 2 == 0
]

unique_values = {
    number
    for number in numbers
}

number_map = {
    number: number ** 2
    for number in numbers
}


# ============================================================
# Lambda
# ============================================================

double = lambda value: value * 2

result = double(10)


# ============================================================
# Decorators & Annotations
# ============================================================

@property
def username_property(self):
    return self.username


@staticmethod
def static_method():
    return "Static"


@classmethod
def class_method(cls):
    return cls()


# ============================================================
# Import / Modules
# ============================================================

import json

import datetime

from pathlib import Path

from collections import defaultdict

from typing import Optional


# ============================================================
# Namespaces & Modules
# ============================================================

os.path.join(
    "C:",
    "Users",
    "Manu"
)

datetime.datetime.now()

Path("example.txt").exists()


# ============================================================
# Exceptions
# ============================================================

try:

    result = 10 / 0

except ZeroDivisionError as error:

    print(error)

except Exception as error:

    print(error)

else:

    print("No error")

finally:

    print("Finished")


# ============================================================
# Raise
# ============================================================

if age < 0:

    raise ValueError(
        "Age cannot be negative"
    )


# ============================================================
# Context Managers
# ============================================================

with open(
    "example.txt",
    "r",
    encoding="utf-8"
) as file:

    content = file.read()


# ============================================================
# Async / Await
# ============================================================

import asyncio


async def fetch_data():

    await asyncio.sleep(1)

    return "Data"


async def main():

    data = await fetch_data()

    print(data)


# ============================================================
# Regular Expressions
# ============================================================

import re


pattern = r"^[a-zA-Z0-9_]+$"

regex = re.compile(pattern)

match = regex.match("Python_123")


# ============================================================
# Invalid / Deprecated
# ============================================================

# Invalid syntax examples are intentionally commented out
# so that the file remains executable.

# invalid =

# if True

# def invalid_function(

# Deprecated example:

# imp module is deprecated in modern Python versions.
# import imp


# ============================================================
# Special / Dunder Methods
# ============================================================

class Example:

    def __init__(self):
        self.value = 10

    def __str__(self):
        return str(self.value)

    def __repr__(self):
        return f"Example(value={self.value})"

    def __len__(self):
        return 1

    def __eq__(self, other):
        return self.value == other.value


# ============================================================
# Main Entry Point
# ============================================================

if __name__ == "__main__":

    user = User(
        user_id=1,
        username="Manu"
    )

    print(user)

    print(
        calculate_sum(
            10,
            20
        )
    )