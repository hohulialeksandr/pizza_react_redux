import React, { memo } from 'react';
import PropTypes from 'prop-types';

// class Categories extends React.Component {
//     state = {
//         activeItem: 3,
//     };

//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         });
//     };

//     render() {
//         const { items, onClickItem } = this.props;
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((name, index) => (
//                         <li
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={() => this.onSelectItem(index)}
//                             key={`${name}_${index}`}>
//                             {name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }

const Categories = memo(function Categories({ activeCategory, items = [], onClickCategory = () => null }) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onClickCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.number,
    onClickCategory: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.string)
};

Categories.defaultProps = { activeCategory: null, items: [] }

export default Categories;