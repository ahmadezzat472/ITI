#include <iostream>
using namespace std;

bool isLeapYear(int year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int getDaysInMonth(int month, int year) {
    if (month == 2) {
        return isLeapYear(year) ? 29 : 28;
    } else if (month == 1 || month == 3 || month == 5 || month == 7 ||
               month == 8 || month == 10 || month == 12) {
        return 31;
    } else {
        return 30;
    }
}

bool isValidDate(int day, int month, int year) {
    if (year < 1900 || year > 2025) {
        cout << "Error: Year must be between 1900 and 2025" << endl;
        return false;
    }

    if (month < 1 || month > 12) {
        cout << "Error: Month must be between 1 and 12" << endl;
        return false;
    }

    if (day < 1) {
        cout << "Error: Day must be at least 1" << endl;
        return false;
    }

    int maxDays = getDaysInMonth(month, year);
    if (day > maxDays) {
        cout << "Error: " << month << "/" << year << " has only " << maxDays << " days" << endl;
        return false;
    }

    return true;
}

bool isFutureDate(int day, int month, int year, int currentDay, int currentMonth, int currentYear) {
    if (year > currentYear) return true;
    if (year == currentYear && month > currentMonth) return true;
    if (year == currentYear && month == currentMonth && day > currentDay) return true;
    return false;
}

int main() {
    int currentYear = 2025, currentMonth = 11, currentDay = 3;
    int Year, Month, Day;

    bool validInput = false;
    while (!validInput) {
        cout << "Please Enter Year: ";
        cin >> Year;

        if (cin.fail()) {
            cin.clear();
            cin.ignore(10000, '\n');
            cout << "Error: Please enter a valid number" << endl;
            continue;
        }

        cout << "Please Enter Month: ";
        cin >> Month;

        if (cin.fail()) {
            cin.clear();
            cin.ignore(10000, '\n');
            cout << "Error: Please enter a valid number" << endl;
            continue;
        }

        cout << "Please Enter Day: ";
        cin >> Day;

        if (cin.fail()) {
            cin.clear();
            cin.ignore(10000, '\n');
            cout << "Error: Please enter a valid number" << endl;
            continue;
        }

        // Validate the date
        if (!isValidDate(Day, Month, Year)) {
            cout << "Please try again.\n" << endl;
            continue;
        }

        // Check if date is in the future
        if (isFutureDate(Day, Month, Year, currentDay, currentMonth, currentYear)) {
            cout << "Error: Date cannot be in the future" << endl;
            cout << "Please try again.\n" << endl;
            continue;
        }

        validInput = true;
    }

    // Calculate difference
    int yourYear = currentYear - Year;
    int yourMonth = currentMonth - Month;
    int yourDay = currentDay - Day;

    // Adjust if day is negative
    if (yourDay < 0) {
        yourMonth--;
        // Get days in the previous month
        int prevMonth = (currentMonth == 1) ? 12 : currentMonth - 1;
        int prevYear = (currentMonth == 1) ? currentYear - 1 : currentYear;
        yourDay += getDaysInMonth(prevMonth, prevYear);
    }

    // Adjust if month is negative
    if (yourMonth < 0) {
        yourYear--;
        yourMonth += 12;
    }

    cout << "\n==================================" << endl;
    cout << "Time elapsed from " << Month << "/" << Day << "/" << Year << " to "
         << currentMonth << "/" << currentDay << "/" << currentYear << ":" << endl;
    cout << "Years: " << yourYear << endl;
    cout << "Months: " << yourMonth << endl;
    cout << "Days: " << yourDay << endl;
    cout << "==================================" << endl;

    return 0;
}
