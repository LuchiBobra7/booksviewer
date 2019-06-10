import React from 'react';

const Skeleton = ({width = 'auto', height, children}) => {
    return (
        <div className="bg-light mb-3" style={{width: width, height: height}}>
            {children}
        </div>
    );
};

export default Skeleton;