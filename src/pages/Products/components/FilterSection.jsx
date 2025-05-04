import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FilterSection = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: 'All',
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All'
  });

  const [expandedCategories, setExpandedCategories] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const [categorySelections, setCategorySelections] = useState({
    Men: false,
    Women: false,
    BobyAndKids: false,
  });
  
  const handleFilterChange = (category, value) => {
    const updatedFilters = { ...filters, [category]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    handleFilterChange(name, checked);
  };

  const handleCategorySelection = (e) => {
    const { name, checked } = e.target;
    setCategorySelections(prev => ({ ...prev, [name]: checked }));
  };
  
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleUnselectAll = () => {
    setCategorySelections({
      Men: false,
      Women: false,
      BobyAndKids: false,
    });
  };

  const renderCategoryDropdown = () => {
    return (
      <div className='p-4 bg-gray-50 rounded-md my-2'>

        <button onClick={handleUnselectAll} className='border-none mt-2 mb-4 text-blue-600'>unselectAll</button>

        <div className='flex items-center mb-2'>
          <input
            type="checkbox" id="Men" name="Men"
            checked={categorySelections.Men}
            onChange={handleCategorySelection}
            className="h-[22px] w-[22px] border border-gray-300"
          />
          <label htmlFor="Men" className="ml-4">
            Men
          </label>
        </div>

        <div className='flex items-center mb-2'>
          <input
            type="checkbox" id="Women" name="Women"
            checked={categorySelections.Women}
            onChange={handleCategorySelection}
            className="h-[22px] w-[22px] border border-gray-300"
          />
          <label htmlFor="Women" className="ml-4">
            Women
          </label>
        </div>

        <div className='flex items-center'>
          <input
            type="checkbox" id="BobyAndKids" name="BobyAndKids"
            checked={categorySelections.BobyAndKids}
            onChange={handleCategorySelection}
            className="h-[22px] w-[22px] border border-gray-300"
          />
          <label htmlFor="BobyAndKids" className="ml-4">
            Baby & Kids
          </label>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Customizable */}
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox" id="customizable" name="customizable"
            checked={filters.customizable}
            onChange={handleCheckboxChange}
            className="h-[22px] w-[22px] border border-gray-300"
          />
          <label htmlFor="customizable" className="ml-4 text-lg font-bold uppercase">
            Customizable
          </label>
        </div>
      </div>
      
      <hr className="border-t border-gray-200 my-6" />
      
      {/* Ideal For */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">IDEAL FOR</h3>
          <button 
            onClick={() => toggleCategory('idealFor')} 
            className="focus:outline-none"
            aria-expanded={expandedCategories.idealFor}
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.idealFor ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.idealFor && renderCategoryDropdown()}
      </div>
      
      {/* Occasion */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">OCCASION</h3>
          <button 
            onClick={() => toggleCategory('occasion')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.occasion ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.occasion && renderCategoryDropdown()}
      </div>

      {/* Work */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">Work</h3>
          <button 
            onClick={() => toggleCategory('work')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.work ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.work && renderCategoryDropdown()}
      </div>

      {/* fabric */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">Fabric</h3>
          <button 
            onClick={() => toggleCategory('fabric')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.fabric ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.fabric && renderCategoryDropdown()}
      </div>

      {/* segment */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">segment</h3>
          <button 
            onClick={() => toggleCategory('segment')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.segment ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.segment && renderCategoryDropdown()}
      </div>

      {/* suitableFor */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">suitableFor</h3>
          <button 
            onClick={() => toggleCategory('suitableFor')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.suitableFor ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.suitableFor && renderCategoryDropdown()}
      </div>

      {/* rawMaterials */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">rawMaterials</h3>
          <button 
            onClick={() => toggleCategory('rawMaterials')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.rawMaterials ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.rawMaterials && renderCategoryDropdown()}
      </div>

      {/* pattern */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold uppercase">pattern</h3>
          <button 
            onClick={() => toggleCategory('pattern')} 
            className="focus:outline-none"
          >
            <img 
              src="/images/img_arrowleft.svg" 
              alt="Expand" 
              className={`h-4 w-4 transform ${expandedCategories.pattern ? 'rotate-270' : 'rotate-90'}`} 
            />
          </button>
        </div>
        <p className="text-lg mt-2">All</p>
        {expandedCategories.pattern && renderCategoryDropdown()}
      </div>
      
    </div>
  );
};

FilterSection.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterSection;