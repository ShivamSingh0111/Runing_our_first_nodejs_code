### Number System

1. decimal --> 0-9 --> base 10 (redix)
2. octa --> 0-7 --> base 8 --> 0o12
3. hexadecimal --> 0-15 --> base 16 --> 0x12A
4. binary --> 0-1 --> base 2 --> 0b110

## Programming calculator

-> first open `standered` calculator.
-> click on 3 dot.
-> select programming.
-> now you can convert all `number system`.

## Digital data unit

8bit --> 1bytes --> 2 nibble
4bit --> 1nibble --> 0.5 bytes

## 2 way to messure digital data unit

1. S.I --> INTERNATIONAL STANDERED
2. IEC --> INTERNALIONAL ELECTROTECHNICAL COMISSION

###  1. SI Units (Decimal System – base 10)

👉 Used by storage manufacturers (HDD, SSD, pen drives)
```
Unit Full Form Value
B Byte 8 bits
KB Kilobyte 10³ = 1,000 bytes
MB Megabyte 10⁶ = 1,000,000 bytes
GB Gigabyte 10⁹ = 1,000,000,000 bytes
TB Terabyte 10¹² bytes
PB Petabyte 10¹⁵ bytes
EB Exabyte 10¹⁸ bytes
ZB Zettabyte 10²¹ bytes
YB Yottabyte 10²⁴ bytes

👉 Example:
1 TB (SSD) = 1,000 GB (SI)
```
### 2. IEC Units (Binary System – base 2)

👉 Used by operating systems (Windows, Linux, RAM)
```
Unit Full Form Value
B Byte 8 bits
KiB Kibibyte 2¹⁰ = 1,024 bytes
MiB Mebibyte 2²⁰ = 1,048,576 bytes
GiB Gibibyte 2³⁰ bytes
TiB Tebibyte 2⁴⁰ bytes
PiB Pebibyte 2⁵⁰ bytes
EiB Exbibyte 2⁶⁰ bytes
ZiB Zebibyte 2⁷⁰ bytes
YiB Yobibyte 2⁸⁰ bytes
```



### sexagesimal --> base 60

## eniac computer --> this computer use 10 digit decimal number rather than binary number


### Character Set kya hota hai?

## Character Set = characters ki list (collection)
```
Matlab:

System me kaun-kaun se characters allowed hain

📌 Example:
Letters → A, B, C
Numbers → 1, 2, 3
Symbols → @, #, ₹

👉 In sab ka group = Character Set

🔸 Real-life example:

Socho ek school hai:

Students ki list: Rahul, Aman, Priya
👉 Ye list = Character Set
🔹 Character Encoding kya hota hai?
```
### Character Encoding = har character ko number/binary me convert karne ka rule
```
Matlab:

Computer ko samjhane ke liye character ko number diya jata hai

📌 Example:

Character: A

ASCII me → A = 65
Binary me → 01000001

👉 Ye mapping process = Encoding

🔸 Real-life example:

Same school:

Rahul → Roll No 1
Aman → Roll No 2

👉 Roll number assign karna = Encoding

🔥 Main Difference (simple table)
Point	Character Set	Character Encoding
Kya hai	Characters ki list	Characters ko number me convert karna
Focus	"Kaun-kaun se characters?"	"Kaise store karenge?"
Example	A, B, C	A = 65
🔹 Ek line me samjho

👉 Character Set = "Characters ka collection"
👉 Encoding = "Unko machine language me convert karna"
```


## --> To check hex and binary value in terminal
```
1. xxd -b `filename` --> to convert into binary
1. xxd  `filename` --> to convert into hex
2. xxd -g 1 `filename` --> to convert into hexa and make 1 group because byDefault it makes 2 group.

```

## for utf-8 and ascii 
```
if char value less than 127 then computer consider 1 bytes

💡 Easy yaad rakhne ka trick
ASCII → always 1 byte
UTF-8 → smart (1–4 byte, but <127 = 1 byte)
UTF-16 → mostly 2 byte
UTF-32 → always 4 byte
```