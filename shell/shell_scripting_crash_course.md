
# Shell Scripting Crash Course (Expanded)

## 1. Introduction to Shell Scripting
Shell scripting is a way to automate repetitive tasks in Linux/Unix by combining commands and logic in a script file. Shell scripts are written in languages like **Bash**, **Zsh**, and **Sh**.

### Why Use Shell Scripting?
- Automate repetitive tasks
- Perform complex file and text manipulation
- Monitor system performance and logs
- Schedule jobs using `cron`

### Creating and Running a Shell Script
1. Create a file:
```bash
nano myscript.sh
```

2. Add the shebang line to specify the shell:
```bash
#!/bin/bash
```

3. Make it executable:
```bash
chmod +x myscript.sh
```

4. Run the script:
```bash
./myscript.sh
```

---

## 2. Variables and Data Types
### Defining Variables
```bash
name="John"
age=30
```

### Accessing Variables
```bash
echo "My name is $name and I am $age years old."
```

### Readonly Variables
```bash
readonly PI=3.14
```

### Environment Variables
```bash
export MY_VAR="Hello World"
```

### Special Variables
| Variable | Description |
|---|---|
| `$0` | Script name |
| `$1`, `$2`, ... | Positional parameters |
| `$#` | Number of arguments |
| `$@` | All arguments as separate strings |
| `$*` | All arguments as a single string |
| `$?` | Exit status of the last command |
| `$$` | Current script’s process ID |

---

## 3. Conditional Statements
### If-Else
```bash
if [ $age -gt 18 ]; then
  echo "Adult"
else
  echo "Minor"
fi
```

### Nested If
```bash
if [ $age -gt 18 ]; then
  if [ $age -lt 65 ]; then
    echo "Working age"
  else
    echo "Retired"
  fi
fi
```

### Case Statement
```bash
fruit="apple"
case $fruit in
  "apple") echo "Apple";;
  "banana") echo "Banana";;
  *) echo "Unknown";;
esac
```

---

## 4. Loops
### For Loop
```bash
for i in {1..5}
do
  echo "Number: $i"
done
```

### While Loop
```bash
counter=1
while [ $counter -le 5 ]
do
  echo "Counter: $counter"
  ((counter++))
done
```

### Until Loop
```bash
counter=1
until [ $counter -gt 5 ]
do
  echo "Counter: $counter"
  ((counter++))
done
```

---

## 5. Functions
### Defining a Function
```bash
my_function() {
  echo "Hello, $1"
}
my_function "World"
```

### Returning a Value
```bash
add_numbers() {
  return $(($1 + $2))
}
add_numbers 2 3
result=$?
echo $result
```

---

## 6. Pipes and Short-Circuiting
### Pipes (`|`)
- Sends the output of one command as the input to another.
```bash
cat file.txt | grep "error"
```

### Short-Circuiting (`&&`, `||`)
- `&&` → Executes the second command **only if** the first one succeeds.
```bash
mkdir test_dir && cd test_dir
```

- `||` → Executes the second command **only if** the first one fails.
```bash
mkdir test_dir || echo "Failed to create directory"
```

---

## 7. Data Manipulation Tools
### 7.1 `sed` (Stream Editor)
- Replace text:
```bash
sed 's/old/new/' file.txt
```

- Replace globally:
```bash
sed 's/old/new/g' file.txt
```

- Delete lines:
```bash
sed '/pattern/d' file.txt
```

- Insert after line:
```bash
sed '2 a\Inserted Line' file.txt
```

---

### 7.2 `awk` (Pattern Scanning and Processing)
- Print specific columns:
```bash
awk '{print $1, $3}' file.txt
```

- Filter by pattern:
```bash
awk '/pattern/ {print $1, $2}' file.txt
```

- Sum values:
```bash
awk '{sum += $2} END {print sum}' file.txt
```

- Conditional printing:
```bash
awk '{if ($2 > 50) print $1, $2}' file.txt
```

---

### 7.3 `cut`
- Cut by delimiter:
```bash
cut -d',' -f1 file.txt
```

- Cut by byte:
```bash
cut -b1-5 file.txt
```

---

### 7.4 `sort`
- Sort in ascending order:
```bash
sort file.txt
```

- Sort in descending order:
```bash
sort -r file.txt
```

- Sort numerically:
```bash
sort -n file.txt
```

---

### 7.5 `uniq`
- Remove duplicates:
```bash
sort file.txt | uniq
```

- Count unique lines:
```bash
sort file.txt | uniq -c
```

---

### 7.6 `find`
- Find by filename:
```bash
find /path/to/dir -name "*.txt"
```

- Find files modified in last 7 days:
```bash
find /path/to/dir -mtime -7
```

- Execute command on found files:
```bash
find /path/to/dir -name "*.txt" -exec rm {} \;
```

---

### 7.7 `xargs`
- Pass output to another command:
```bash
find . -name "*.log" | xargs rm
```

- Build multiple arguments:
```bash
echo "file1 file2" | xargs rm
```

---

## 8. Error Handling
### Exit Status
```bash
ls non_existing_file
echo $?  # Outputs 2 (error code)
```

### Trap Signals
```bash
trap 'echo "Script interrupted"; exit' INT
```

---

## 9. Input and Output Redirection
### Redirect Output to a File
```bash
echo "Hello" > file.txt
```

### Redirect Input from a File
```bash
cat < file.txt
```

### Redirect Error Output
```bash
command 2> error.txt
```

---

## 10. Debugging
### Enable Debug Mode
```bash
bash -x myscript.sh
```

### Echo Debug Info
```bash
set -x  # Start debugging
set +x  # Stop debugging
```

---

## 11. Cron Jobs
- Example cron job (run every 5 minutes):
```bash
*/5 * * * * /path/to/script.sh
```

---

## ✅ End of Course
