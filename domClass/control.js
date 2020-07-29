// console.log(document.URL)
// console.log(document.domain)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.links)
// console.log(document.images)

// const listItems = document.getElementsByClassName('list-group-item')
// listItems[0].textContent = 'Play some games'
// listItems[0].style.fontWeight = 'bold'
// listItems[0].style.background = 'red'
// listItems[0].style.color = 'white'

// for (let i = 0; i < listItems.length; i++) {
//     listItems[i].style.background = 'red'
//     listItems[i].style.color = 'white'
    
// }

// console.log(listItems)

// let addActivity = document.getElementById('add-activity')
// addActivity.textContent="Add some work"

// let addActivity = document.querySelector('add-activity')
// let button = document.querySelector('input[type="submit"]')
// let numOfLikes = 0;
// button.value ='Likes';
// button.addEventListener('click', function(event) {
//     event.preventDefault();
//     numOfLikes += 1;
//     button.value = `Likes ${numOfLikes}`
// })

let activityList =[
    {
        title: "Do the dishes",
        finished: false
    },
    {
        title: "Do Laundry",
        finished: false
    },
    {
        title: "Meetup with Client",
        finished: false
    },
    {
        title: "Attend Class",
        finished: false
    }
]

const activityListParentElement = document.querySelector('#activity-list')
console.log(activityListParentElement);

function mapArrayToDom() {
    activityListParentElement.innerHTML='';
    activityList.forEach(function(activity, index) {
    //CREATE CHILD ELEMENT
    const newActivityDom = document.createElement("li");
    newActivityDom.className='list-group-item';

    //CREATE INNER CHILD DIV
    const activityItemDiv = document.createElement('div');
    activityItemDiv.className='activity-item';

    //CREATE TITLE SPAN
    const titleSpan = document.createElement('span')
    titleSpan.textContent= activity.title

    //CREATE DELETE BUTTON
    const deleteActivityBtn= document.createElement('button');
    deleteActivityBtn.className ="btn btn-danger"
    deleteActivityBtn.type ="button"
    deleteActivityBtn.textContent ="Delete"
    deleteActivityBtn.onclick = function(){
        //This is an anonymous function
        alert(`Delete ${activityList[index].title}?`);
        newActivityDom.remove();
        console.log(activityList);  
    };

    //APPEND TITLE SPAN & DELETE BUTTON TO 'INNER CHILD DIV'
    activityItemDiv.appendChild(titleSpan);
    activityItemDiv.appendChild(deleteActivityBtn);

    // //APPEND INNER CHILD DIV TO ACTIVITY CHILD DIV
    newActivityDom.appendChild(activityItemDiv);

    // //APPEND CHILD DIV TO PARENT ELEMENT
    activityListParentElement.appendChild(newActivityDom)
    });
}


const submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    const textInputValue = document.querySelector('input[type="text"]').value

    if (textInputValue == "") {
        window.alert('Event cannot be empty')
    } else{
        activityList.push({
            title: textInputValue,
            finished:false
        });
        mapArrayToDom();

        document.querySelector('form').reset();
    }   
});




