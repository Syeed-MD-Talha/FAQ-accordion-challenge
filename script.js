
// for(let i=0;i<4;i++)
//     {
//         document.querySelectorAll('#plus')[i].addEventListener('click',function(){
//             console.log('Clicked')
//             document.querySelectorAll('.answer')[i].style.display='block';
//             document.querySelectorAll('#plus')[i].style.display='none';
//             document.querySelectorAll('#minus')[i].style.display='block';
//         })
//         document.querySelectorAll('#minus')[i].addEventListener('click',function(){
//             console.log('Clicked')
//             document.querySelectorAll('.answer')[i].style.display='none';
//             document.querySelectorAll('#plus')[i].style.display='block';
//             document.querySelectorAll('#minus')[i].style.display='none';
//         })
//     }


document.querySelectorAll('.faqs').forEach(
   (faq)=>{
    faq.querySelector('#plus').addEventListener('click',function(){
        console.log('Clicked')
        faq.querySelector('.answer').style.display='block';
        faq.querySelector('#plus').style.display='none';
        faq.querySelector('#minus').style.display='block';
    })
    faq.querySelector('#minus').addEventListener('click',function(){
        console.log('Clicked')
        faq.querySelector('.answer').style.display='none';
        faq.querySelector('#plus').style.display='block';
        faq.querySelector('#minus').style.display='none';
    })
   }
);
    