function Grades() {
  return `
        <!-- Buttons on top -->
        <select name="Import">
        <option value="Gradebook" selected>Gradebook</option>
        <option value="Change Gradebook View">Change Gradebook View</option>
        <option value="Traditional Gradebook">Traditional Gradebook</option>
        <option value="Individual Gradebook">Individual Gradebook</option>
        </select>
        <button type="button">Import</button>
        <select name="Export">
        <option value="Export" selected>Export</option>
        <option value="Excel">Export Current Gradebook View</option>
        <option value="Export Entire Gradebook">Export Entire Gradebook</option>
        </select>
        <button type="button">Configure</button>
        <!-- Form fields -->
        <h3>Student Names</h3>
        <input type="text" name="Search Students" placeholder="Search Students" />
        <h3>Assignment Names</h3>
        <input
        type="text"
        name="Search Assignments"
        placeholder="Search Assignments"
        />
        <br />
        <br />
        <button type="button">Apply Filters</button>
        <br />
        <br />
        <!-- Grades table -->
        <table width="100%" border="1">
        <thead>
            <tr>
            <th rowspan="2">Student Name</th>
            <th>A1 SETUP</th>
            <th>A2 HTML</th>
            <th>A3 CSS</th>
            <th>A4 BOOTSTRAP</th>
            <th>A5 JAVASCRIPT</th>
            <th>A6 REACT</th>
            <th>A7 REDUX</th>
            <th>A8 NODE</th>
            <th>A9 MONGO</th>
            </tr>
            <tr>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            <th>Out of 100</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Alice Wonderland</td>
            <td>100</td>
            <td>100</td>
            <td>96</td>
            <td>95</td>
            <td>89</td>
            <td>100</td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Bob Builder</td>
            <td>97</td>
            <td>100</td>
            <td>96</td>
            <td>76</td>
            <td>89</td>
            <td>83</td>
            <td><input type="number" value="85" min="0" max="100" /></td>
            <td>98</td>
            <td>65</td>
            </tr>
            <tr>
            <td>Charlie Chaplin</td>
            <td><input type="number" value="99" min="0" max="100" /></td>
            <td>65</td>
            <td>87</td>
            <td>95</td>
            <td>89</td>
            <td>87</td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Dora Explorer</td>
            <td>65</td>
            <td>89</td>
            <td>96</td>
            <td>95</td>
            <td>89</td>
            <td>100</td>
            <td><input type="number" value="86" min="0" max="100" /></td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Elmo Monster</td>
            <td>43</td>
            <td><input type="number" value="92" min="0" max="100" /></td>
            <td>96</td>
            <td>95</td>
            <td>89</td>
            <td>100</td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Fred Flintstone</td>
            <td>91</td>
            <td>98</td>
            <td>96</td>
            <td>85</td>
            <td>89</td>
            <td>100</td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>George Jetson</td>
            <td>88</td>
            <td>77</td>
            <td><input type="number" value="96" min="0" max="100" /></td>
            <td>95</td>
            <td>89</td>
            <td>78</td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>Homer Simpson</td>
            <td><input type="number" value="67" min="0" max="100" /></td>
            <td>80</td>
            <td>96</td>
            <td>95</td>
            <td>89</td>
            <td>87</td>
            <td>99</td>
            <td>82</td>
            <td>88</td>
            </tr>
            <tr>
            <td>Isaac Newton</td>
            <td>75</td>
            <td><input type="number" value="69" min="0" max="100" /></td>
            <td><input type="number" value="96" min="0" max="100" /></td>
            <td>95</td>
            <td>84</td>
            <td><input type="number" value="86" min="0" max="100" /></td>
            <td>99</td>
            <td>100</td>
            <td>100</td>
            </tr>
            <tr>
            <td>John Doe</td>
            <td>72</td>
            <td>79</td>
            <td>93</td>
            <td>95</td>
            <td>86</td>
            <td>95</td>
            <td>99</td>
            <td>78</td>
            <td>74</td>
            </tr>
            <tr>
            <td>John Smith</td>
            <td>77</td>
            <td>81</td>
            <td>80</td>
            <td>83</td>
            <td>89</td>
            <td>86</td>
            <td>94</td>
            <td>92</td>
            <td>79</td>
            </tr>
            <tr>
            <td>John Wick</td>
            <td>87</td>
            <td>71</td>
            <td>70</td>
            <td>84</td>
            <td><input type="number" value="87" min="0" max="100" /></td>
            <td>96</td>
            <td>97</td>
            <td>99</td>
            <td>100</td>
            </tr>
        </tbody>
        </table>
    `;
}
