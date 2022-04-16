// ------------  Function to clear all products from the page  -----------
clearon = () => document.querySelectorAll('.productPlus').forEach(item => item.remove('li'));

//++ Method 1 - once output array, and then sort by hiding 
//++ Метод 1 - виведення масиву, і сортування приховуванням 

// ----------------------  CONTROL VIA INPUT FIELD  ----------------------
// --------- The function of displaying all products on the page  -------- 
function output() {
    clearon();
    products.forEach((e, i) => {
        let stroka = `<li class="productPlus" id=${products[i].id} > <img src="${products[i].img}" width="200" height="80">
                         <div> <h4> Тип: ${products[i].type}. Категорія: ${products[i].category}. 
                         Сезон: ${products[i].season}. Стать: ${products[i].sex}. </h4> ${descp} </div>
                         </li>`;
        document.getElementById("lot1").innerHTML += stroka;
    });
}
document.getElementById("allProds").addEventListener("click", output);

// ----------  Sort function via input field  -------------
function sort() {
    let oood = document.getElementById("inp").value;
    let vvod = oood.toLowerCase().trim();
    for (let i = 0; i < products.length; i++) {
        if (vvod !== '') {
            const poda = document.querySelectorAll(".productPlus");
            poda[i].style.display = 'none';
        }
        if (vvod !== '' &&
            vvod === products[i].type ||
            vvod === products[i].category ||
            vvod === products[i].season ||
            vvod === products[i].sex) {
            document.getElementById(`${products[i].id}`).style.display = '';
        }
    }
}
//++ Method 2 - deleting and outputting a new array each time 
//++ Метод 2 - постійне видалення та виведення нового масиу 

// ----  CONTROL VIA INPUT FIELD  
// ----  The function of auto-cleaning and display of -
//       all goods when placing the cursor in the input field input 
// ----  Функція автоочищення та виведення усього товару при 
//       встановленні курсора в поле введення input  
// let sadok = document.getElementById("inp").value;   
// function ochistka () {  
//     if (sadok == '') {
//        clearon();
//        for (let i=0; i < products.length; i++) {
//             let stroka =`<li class="productPlus" id=${products[i].id}> <img src="${products[i].img}" width="200" height="80">
//                          <div> <h4> Тип: ${products[i].type}. Категорія: ${products[i].category}. 
//                          Сезон: ${products[i].season}. Стать: ${products[i].sex}. </h4> ${descp} </div>
//                          </li>`;
//             document.getElementById("lot1").innerHTML += stroka;
//        }   
//     }
// }
// document.getElementById("inp").addEventListener("click", ochistka);

//  ----   The method of automatic output of the 
//         products when the page is reloaded 
//  ----   Метод автовиведення товару при перезавантаженні сторінки 
// if (sadok == '') {
//     ochistka ();
// }

//  ----   Function of sorting and output of sorted goods (new sorted array) 
//  ----   Функція сортування та виведення товарів (новий відсортований масив)
// function sort() {
//     let oood = document.getElementById("inp").value;
//     let vvod = oood.toLowerCase().trim();
//     clearon();
//     for (let i = 0; i < products.length; i++) {
//         if ((vvod == products[i].type || vvod == products[i].category ||
//                 vvod == products[i].season || vvod == products[i].sex) && (vvod !== '')) {
//             let productsCategory = products.filter(e => e.х == vvod);
//             let stroka = `<a href="${products[i].href}"><li class="productPlus" id=${products[i].id} > <img src="${products[i].img}" width="200" height="80">
//                          <div> <h4> Тип: ${products[i].type}. Категорія: ${products[i].category}. 
//                          Сезон: ${products[i].season}. Стать: ${products[i].sex}. </h4> ${descp} </div>
//                          </li></a>`;
//             document.getElementById("lot1").innerHTML += stroka;
//         }
//     }
// }

// ---------------------  ACCORDION  ---------------------
// -------  Sorting block mune accordion (works with method 1)  --------
document.querySelectorAll(".name_Prods")
    .forEach((elem) => {
        elem.addEventListener('click', () => {
            namesort = elem.getAttribute('data-name');
            output();
            products.forEach((e, i) => {
                const poda = document.querySelectorAll(".productPlus");
                poda[i].style.display = 'none';
                if (namesort === products[i].type ||
                    namesort === products[i].category ||
                    namesort === products[i].season ||
                    namesort === products[i].sex) {
                    document.getElementById(`${products[i].id}`).style.display = '';
                }
            });
        });
    });

// --------------  Menu accordion CSS  -------------------
document.querySelectorAll(".accordion")
    .forEach((e) => {
        e.addEventListener('click', () => {
            // accordion.forEach(el => {el.classList.remove('show')});
            e.classList.toggle('show');
        });
    });
