import React from 'react';

const Blogs = () => {
    return (
        <div className='m-32'>
            <div>
                <h1 className='font-bold text-5xl my-10'>What is Context API?</h1>
                <p>The Context API is a React framework component structure that allows us to share particular types of data across all levels of the application. It is intended to deal with the issue of prop drilling. Context API is helpful for exchanging data that is deemed global, such as the currently authorized user, the application's theme preferences, and so on. When we have this sort of data, we can utilize the Context API without having to use any other modules. In fact, you may use the Context API in any circumstance where you need to send a prop via a component such that it reaches another component further down the tree. We begin by creating a context object using the createContext method.</p>
            </div>
            <div>
                <h1 className='font-bold text-5xl my-10'>
                    What is HTML Semantics?

                </h1>
                <p>
                    Elements like header, footer, and article are all regarded as semantic since they correctly explain the element's function and the sort of material that is included inside them. Elements like header, nav, section, article, aside, and footer behave similarly to div elements. They organize other items into page parts. Whereas a div tag might include any kind of information, it is simple to determine what type of content would fit in a semantic header section. It is much simpler to read. The simpler it is to read and comprehend the code, the easier your work will be. It is more easily accessible. Search engines may also better grasp the context and content of your website, resulting in a better user experience.
                </p>
            </div>
            <div>
                <h1 className='font-bold text-5xl my-10'>
                    Inline Vs. Block Vs. Inline-Block Element

                </h1>
                <p>
                    Inline components are actually put in a single line, side by side with other inline or inline-block elements.They will begin on a new line only if there is insufficient space on the current line for any more inline components. When using inline elements, there is one limitation. Specific height and width, as well as margin-top and margin-bottom characteristics, are not supported. As a result, inline elements will be as large as their contents if no paddings or side margins are used. Inline blocks and inline can do everything that lines can do, but they can also have widths, heights, and vertical margins specified! The block components are always separated by a new line. They will also take up a whole row or breadth of space. It signifies that no other HTML elements may be used in conjunction with block level elements. You may also choose the width/height and vertical margins.


                </p>

            </div>
        </div>
    );
};

export default Blogs;