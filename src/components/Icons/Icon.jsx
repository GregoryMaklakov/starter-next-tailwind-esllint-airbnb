import PropTypes from 'prop-types';

export const ICON_TYPES = {
    key: "namKey",

};

export const Icon = ({ className, name, size, color }) => {
    const props = {
        className,
    };
    if (size) {
        props.width = size;
        props.height = size;
    }
    if (color) {
        props.fill = color;
    }
    switch (name) {
        case ICON_TYPES.namKey:
            return (
                <svg
                    {...props}
                    viewBox="0 0 27 27"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.33366 2.65124C6.83077 2.65124 5.38943 3.24367 4.32672 4.2982C3.26401 5.35273 2.66699 6.78299 2.66699 8.27432V18.8589C2.66699 20.3503 3.26401 21.7805 4.32672 22.835C5.38943 23.8896 6.83077 24.482 8.33366 24.482H19.0003C20.5032 24.482 21.9446 23.8896 23.0073 22.835C24.07 21.7805 24.667 20.3503 24.667 18.8589V8.27432C24.667 6.78299 24.07 5.35273 23.0073 4.2982C21.9446 3.24367 20.5032 2.65124 19.0003 2.65124H8.33366ZM2.91251 2.89487C4.35029 1.46815 6.30033 0.666626 8.33366 0.666626H19.0003C21.0337 0.666626 22.9837 1.46815 24.4215 2.89487C25.8593 4.32159 26.667 6.25663 26.667 8.27432V18.8589C26.667 20.8766 25.8593 22.8117 24.4215 24.2384C22.9837 25.6651 21.0337 26.4666 19.0003 26.4666H8.33366C6.30033 26.4666 4.35029 25.6651 2.91251 24.2384C1.47473 22.8117 0.666992 20.8766 0.666992 18.8589V8.27432C0.666992 6.25663 1.47473 4.32159 2.91251 2.89487ZM13.8123 5.95893C15.7472 5.95409 17.6161 6.6573 19.0613 7.93407L17.7314 9.41635C16.6535 8.46409 15.2595 7.9397 13.8163 7.94355L13.8137 7.94355C10.5815 7.94355 8.00033 10.4817 8.00033 13.5666C8.00033 16.6516 10.5816 19.1897 13.8123 19.1897C15.8491 19.1897 17.1513 18.4547 17.9809 17.5007C18.5837 16.8075 18.9687 15.9601 19.1725 15.1107H14.7883V13.126H21.4056L21.3312 14.1872C21.2266 15.6798 20.6962 17.4159 19.4951 18.7972C18.2674 20.2091 16.4022 21.1743 13.8123 21.1743C9.51771 21.1743 6.00033 17.7876 6.00033 13.5666C6.00033 9.34594 9.51708 5.95967 13.8123 5.95893Z"
                    />
                </svg>
            );
        default:
            return null;
    }
};

Icon.propTypes = {
    name: PropTypes.oneOf(Object.values(ICON_TYPES)).isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: 32,
};
