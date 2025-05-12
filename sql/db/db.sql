-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2025 at 03:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `img1` varchar(225) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `list` varchar(225) NOT NULL,
  `content` text NOT NULL,
  `button_text` varchar(100) NOT NULL,
  `button_link` varchar(255) NOT NULL,
  `sub_title` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `img1`, `img2`, `title`, `list`, `content`, `button_text`, `button_link`, `sub_title`) VALUES
(1, 'about.png', 'about2.png', 'Crafting Success Stories\r\nOne Client Time', 'You can contact our customer support, We offer a range of services including', 'We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored', 'Read More', '/about', 'About us');

-- --------------------------------------------------------

--
-- Table structure for table `all_title`
--

CREATE TABLE `all_title` (
  `id` int(11) NOT NULL,
  `bg_image` text NOT NULL,
  `small_text` text NOT NULL,
  `title` text NOT NULL,
  `button_text` text NOT NULL,
  `button_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `all_title`
--

INSERT INTO `all_title` (`id`, `bg_image`, `small_text`, `title`, `button_text`, `button_link`) VALUES
(1, '', 'Service We Provide', 'An effective way to achieve\r\nsuccess to Our Work', '', ''),
(2, '', 'Latest Blog', 'Our Latest Trending Blogs & News', 'Explore More', '/contact'),
(3, '', 'services', 'What we Have to Offer For your SERVICES', 'View all services', '/services'),
(4, 'banner.png', '', 'Our New Models Consulting Services Programs', 'Get started', '/contact');

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `bg_image` varchar(225) NOT NULL,
  `small_text` text NOT NULL,
  `title` text NOT NULL,
  `button_text` varchar(225) NOT NULL,
  `button_link` varchar(225) NOT NULL,
  `icons` text NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='3';

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `bg_image`, `small_text`, `title`, `button_text`, `button_link`, `icons`, `text`) VALUES
(1, 'banner.png', 'how it works', 'Strategic Solutions for Sustainable Growth', 'Schedule a Consultation', '/contact', 'phone.png', 'Need Help?');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `button_text` varchar(100) NOT NULL,
  `button_link` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `image`, `title`, `button_text`, `button_link`, `created_at`) VALUES
(1, 'blog.png', 'Exclusive Updates and Analysis in Our Consulting Agency Blog', 'Read More', '/blog-d', '0000-00-00 00:00:00'),
(2, 'blog.png', 'Breaking Down Complex Issues in Our Consulting Agency Blog', 'Read More', '/blog-d', '0000-00-00 00:00:00'),
(3, 'blog.png', 'Breaking Down Complex Issues in Ou ', 'Read More', '/blog-d', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `contact_info`
--

CREATE TABLE `contact_info` (
  `id` int(11) NOT NULL,
  `email` varchar(225) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_info`
--

INSERT INTO `contact_info` (`id`, `email`, `phone`, `address`) VALUES
(1, 'dolores.chambers@example.com', '+123 888 9999', '1901 Thornridge Cir. Shiloh, Hawaii 81063');

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `subscribe_text` text NOT NULL,
  `logo` varchar(225) NOT NULL,
  `copyright_text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footer`
--

INSERT INTO `footer` (`id`, `title`, `subscribe_text`, `logo`, `copyright_text`) VALUES
(1, 'Have an idea lets work together ?', 'we denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms', 'footer-logo.png', 'Copyright � Vatech 2024. Alright Reserved.');

-- --------------------------------------------------------

--
-- Table structure for table `footer_menu`
--

CREATE TABLE `footer_menu` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `footer_menu`
--

INSERT INTO `footer_menu` (`id`, `name`, `link`) VALUES
(1, 'About Us', 'about'),
(2, 'About Us', 'about');

-- --------------------------------------------------------

--
-- Table structure for table `how_we_provide_steps`
--

CREATE TABLE `how_we_provide_steps` (
  `id` int(11) NOT NULL,
  `step_number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `how_we_provide_steps`
--

INSERT INTO `how_we_provide_steps` (`id`, `step_number`, `image`, `text`) VALUES
(1, 1, '1.svg', 'Enter your Product Details'),
(2, 2, '1.svg', 'Pay your\r\nServices Charges'),
(3, 3, '1.svg', 'Ready For\r\nyour Consulting'),
(4, 4, '1.svg', 'Confirm your\r\nBooking');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` bigint(20) DEFAULT NULL,
  `name` varchar(225) NOT NULL,
  `link` varchar(225) NOT NULL,
  `index` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `link`, `index`) VALUES
(0, 'About Us', '/about', 2),
(0, 'Services', '/services', 3),
(0, 'Project', '/project', 4),
(0, 'Blog', '/blog', 5),
(0, 'Contact Us', '/contact', 6),
(0, 'Home', '/', 1);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `button_text` varchar(255) NOT NULL,
  `button_link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `icon`, `title`, `description`, `button_text`, `button_link`) VALUES
(1, 'UIUXDESIGNING.svg', 'UI/UX DESIGNING', 'nulla pariatu Ut enim ad minima veniam, quis nostrum veniam', 'Read More', '/details'),
(2, 'PRODUCTESIGN.svg', 'PRODUCT DESIGN', 'nulla pariatu Ut enim ad minima veniam, quis nostrum veniam', 'Read More', '/details'),
(3, 'DIGITALMARKETING.svg', 'DIGITAL MARKETING', 'nulla pariatu Ut enim ad minima veniam, quis nostrum veniam', 'Read More', '/details');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_title`
--
ALTER TABLE `all_title`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_info`
--
ALTER TABLE `contact_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_menu`
--
ALTER TABLE `footer_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `how_we_provide_steps`
--
ALTER TABLE `how_we_provide_steps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
