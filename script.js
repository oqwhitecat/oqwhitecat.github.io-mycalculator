const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

// ฟังก์ชันใหม่สำหรับปุ่ม DEL
function deleteLast() {
    // .slice(0, -1) คือการตัดตัวอักษรตัวสุดท้ายออกไป
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // ใช้ eval() ในการคำนวณค่าจากสตริง
        const result = eval(display.value);
        
        // แสดงผลลัพธ์บนหน้าจอ และจัดการทศนิยมที่อาจยาวเกินไป
        display.value = parseFloat(result.toFixed(10));

    } catch (error) {
        // หากมีข้อผิดพลาดในการคำนวณ (เช่น 5*/2)
        display.value = 'Error';
    }
}
=======
const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

// ฟังก์ชันใหม่สำหรับปุ่ม DEL
function deleteLast() {
    // .slice(0, -1) คือการตัดตัวอักษรตัวสุดท้ายออกไป
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // ใช้ eval() ในการคำนวณค่าจากสตริง
        const result = eval(display.value);
        
        // แสดงผลลัพธ์บนหน้าจอ และจัดการทศนิยมที่อาจยาวเกินไป
        display.value = parseFloat(result.toFixed(10));

    } catch (error) {
        // หากมีข้อผิดพลาดในการคำนวณ (เช่น 5*/2)
        display.value = 'Error';
   
   
    }
}