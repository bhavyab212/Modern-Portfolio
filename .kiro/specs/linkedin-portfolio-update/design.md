# Design Document

## Overview

This design outlines the approach for updating the portfolio website template with authentic information from the LinkedIn profile at https://www.linkedin.com/in/bhavyab2-chaudhary/. The update will replace placeholder content across all sections while preserving the existing React component architecture, animations, and responsive design.

## Architecture

### Component Structure

The portfolio uses a component-based React architecture with the following main sections:
- `HeroSection.tsx` - Name, title, headline, and profile image
- `AboutSection.tsx` - Professional summary and background
- `EducationSection.tsx` - Academic qualifications and skills
- `CareerTimeline.tsx` - Work experience timeline
- `ProjectsSection.tsx` - Project showcase

### Data Flow

1. **Static Content Approach**: Update component files directly with LinkedIn data
2. **No External API**: Information will be hardcoded into components (no LinkedIn API integration)
3. **Manual Data Extraction**: Extract information from LinkedIn profile and Profile.pdf
4. **Component Updates**: Modify existing TSX files with new content

## Components and Interfaces

### 1. Hero Section Component

**File**: `src/components/HeroSection/HeroSection.tsx`

**Updates Required**:
- Replace "Scarlett Rose" with actual name: "Bhavya Chaudhary"
- Update pronouns section based on LinkedIn profile preferences
- Replace professional title with actual current role
- Update professional headline/description
- Replace profile image URL with appropriate professional photo
- Update skill badges to reflect actual key competencies

**Data Structure**:
```typescript
interface HeroData {
  name: string;
  pronouns?: string;
  title: string;
  headline: string;
  profileImageUrl: string;
  keySkills: string[];
}
```

### 2. About Section Component

**File**: `src/components/AboutSection/AboutSection.tsx`

**Updates Required**:
- Replace placeholder professional summary with LinkedIn summary
- Update years of experience to match actual career timeline
- Highlight actual areas of expertise and specialization
- Maintain professional tone consistent with LinkedIn profile

**Data Structure**:
```typescript
interface AboutData {
  summary: string;
  yearsOfExperience: number;
  expertise: string[];
}
```

### 3. Education Section Component

**File**: `src/components/EducationSection/EducationSection.tsx`

**Updates Required**:
- Replace placeholder degrees with actual educational background
- Update institution names and locations
- Update graduation dates or date ranges
- Replace achievements and coursework with actual information
- Update skills section with actual technical competencies
- **NEW**: Correct B.Tech degree text to "Bachelor of Technology - B.Tech, Electrical Engineering"
- **NEW**: Reorder education entries: School (KV) first, then MDU, then IIT Madras
- **NEW**: Add sports activities (football, badminton, chess, athletics) to school description
- **NEW**: Add neon-style UI highlighting to college/school names
- **NEW**: Add institution logos (kv1/kv2 for light/dark mode, mdu, iitm) with white circular backgrounds
- **NEW**: Ensure logo backgrounds adapt properly to light and dark modes

**Data Structure**:
```typescript
interface Education {
  degree: string;
  institution: string;
  location?: string;
  dateRange: string;
  description: string;
  highlights: string[];
  logo?: string; // Path to institution logo
  logoDark?: string; // Path to dark mode logo variant
}

interface SkillCategory {
  category: string;
  skills: string[];
}
```

**Visual Enhancements**:
- Institution names will have neon glow effect using CSS text-shadow or border-glow
- Logos will be displayed with white circular backgrounds using CSS
- Logo backgrounds will use conditional rendering based on theme (light/dark mode)
- Sports activities will be added as bullet points in the school card

### 4. Career Timeline Component

**File**: `src/components/CareerSection/CareerTimeline.tsx`

**Updates Required**:
- Replace placeholder positions with actual work experience
- Update company names and locations
- Update employment date ranges
- Replace job descriptions with actual responsibilities and achievements
- Maintain chronological order (most recent first)
- Update icons to match role types

**Data Structure**:
```typescript
interface CareerEvent {
  year: string;
  title: string;
  subtitle: string; // Company name
  description: string;
  icon: JSX.Element;
}
```

### 5. Projects Section Component

**File**: `src/components/ProjectsSection/ProjectsSection.tsx`

**Updates Required**:
- Replace placeholder projects with actual projects from LinkedIn
- Update project titles and descriptions
- Update project dates
- Update project links (if available)
- Update project images with relevant visuals

**Data Structure**:
```typescript
interface Project {
  id: number;
  title: string;
  subtitle: string; // Description
  date: string;
  link: string;
  image: string;
}
```

## Data Models

### LinkedIn Profile Data Extraction

Based on the LinkedIn profile URL (https://www.linkedin.com/in/bhavyab2-chaudhary/), the following information needs to be extracted:

1. **Personal Information**
   - Full name
   - Current professional title
   - Professional headline
   - Profile photo

2. **Professional Summary**
   - About section text
   - Years of experience
   - Key expertise areas

3. **Education**
   - Degrees earned
   - Institutions attended
   - Graduation dates
   - Relevant coursework or achievements

4. **Work Experience**
   - Job titles
   - Company names
   - Employment dates
   - Role descriptions and achievements

5. **Skills**
   - Technical skills
   - Professional competencies
   - Skill categories

6. **Projects**
   - Project names
   - Descriptions
   - Dates
   - Links (if available)

### Content Mapping Strategy

| LinkedIn Section | Portfolio Component | Update Strategy |
|-----------------|---------------------|-----------------|
| Name & Headline | HeroSection | Direct replacement |
| About | AboutSection | Direct replacement with formatting |
| Experience | CareerTimeline | Map to timeline events array |
| Education | EducationSection | Map to education cards |
| Skills | EducationSection (SkillCategory) | Organize into categories |
| Projects | ProjectsSection | Map to projects array |

## Error Handling

### Missing Information

**Strategy**: If certain information is not available on LinkedIn:
1. Use reasonable defaults or omit optional fields
2. Maintain existing structure but with minimal content
3. Document missing information for manual review

### Image Handling

**Strategy**: For profile and project images:
1. If LinkedIn profile photo is available, use appropriate URL
2. For projects without images, use relevant placeholder images from free stock photo services
3. Ensure all images are properly sized and optimized

### Content Length

**Strategy**: If LinkedIn content is too long or too short:
1. Truncate long descriptions while maintaining key information
2. Expand short descriptions with context if needed
3. Maintain consistent formatting across all sections

## Testing Strategy

### Visual Regression Testing

1. **Before Update**: Document current appearance
2. **After Update**: Verify all sections render correctly
3. **Responsive Testing**: Test on mobile, tablet, and desktop viewports
4. **Animation Testing**: Ensure all Framer Motion animations still work

### Content Validation

1. **Accuracy**: Verify all information matches LinkedIn profile
2. **Completeness**: Ensure all sections are populated
3. **Consistency**: Check for consistent tone and formatting
4. **Links**: Verify all external links work correctly

### Functional Testing

1. **Navigation**: Test smooth scrolling to all sections
2. **Dock**: Verify dock appears/disappears on scroll
3. **Interactions**: Test any interactive elements (drag-and-drop projects)
4. **Performance**: Ensure page loads quickly with new content

## Implementation Notes

### Phase 1: Data Extraction
- Manually review LinkedIn profile
- Extract all relevant information
- Organize data according to component structure

### Phase 2: Component Updates
- Update each component file with new content
- Maintain existing styling and animations
- Preserve component structure and props

### Phase 3: Asset Updates
- Update profile image
- Update project images if needed
- Ensure all images are optimized

### Phase 4: Validation
- Visual review of all sections
- Cross-reference with LinkedIn profile
- Test responsive behavior
- Verify all animations work

## Design Decisions

### Why Static Content?
- **Simplicity**: No need for API integration or data fetching
- **Performance**: Faster load times with static content
- **Reliability**: No dependency on external APIs
- **Privacy**: No need to expose LinkedIn API credentials

### Why Preserve Existing Structure?
- **Efficiency**: Leverage existing design and animations
- **Consistency**: Maintain professional appearance
- **Time-saving**: Focus on content updates rather than redesign

### Why Manual Data Extraction?
- **Accuracy**: Ensure correct interpretation of LinkedIn data
- **Control**: Ability to format and organize content appropriately
- **Flexibility**: Can enhance or summarize content as needed
