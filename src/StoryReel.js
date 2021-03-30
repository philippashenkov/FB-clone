import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='https://scontent.fiev6-1.fna.fbcdn.net/v/t1.6435-9/73395302_10156596342531961_7908104633929695232_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=WVs40gaOjGwAX97wGH0&_nc_ht=scontent.fiev6-1.fna&oh=5a304590d9ddfd9ef4bd99bf00618371&oe=60892BEA'
                profileSrc='https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/23473074_10155031875776961_8482140412038626648_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gMcy4PfzugAAX-uQ_bp&_nc_oc=AQkguG5VmIdi-eQWkgHIuXgvAnJ9zAQ7mPzBVP9ahw-UZ0o2X88IHJ1pZo-cfCWsxWw&_nc_ht=scontent.fiev6-1.fna&oh=8c6b8c33d8076c9cea5d5faad9b96a4f&oe=60857AFA'
                title='Bill Gates'
            />
        </div>
    );
}

export default StoryReel