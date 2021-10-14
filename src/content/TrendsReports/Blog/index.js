import React from 'react';
import { BLOG_CATEGORIES } from '../../../hooks/useGlobalPosts';
import ReportsTrendsOverview from '../index';

const BlogOverview = () => <ReportsTrendsOverview categoriesId={BLOG_CATEGORIES} activeItem="Blog" />;

export default BlogOverview;
