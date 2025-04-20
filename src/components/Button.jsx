import React from 'react';

const Button = ({ name, className, onClick }) => {
            return (
                        <button 
                                    className={className}
                                    onClick={onClick}
                        >
                                    {name}
                        </button>
            );
};

export default Button;