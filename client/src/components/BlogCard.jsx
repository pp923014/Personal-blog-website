import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { FaRegCalendarAlt } from "react-icons/fa";
import usericon from "@/assets/images/user.png";
import moment from "moment";
import { Link } from "react-router-dom";
import { RouteBlogDetails } from "@/helpers/RouteName";
const BlogCard = ({ props }) => {
  return (
    <Link to={RouteBlogDetails(props.category.slug, props.slug)}>
      <Card className="pt-5 w-85 h-[400px]">
        {" "}
        {/* Fixed width and height */}
        <CardContent className="flex flex-col justify-between h-full">
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex justify-between items-center gap-2">
              <Avatar>
                <AvatarImage src={props.author.avatar || usericon} />
              </Avatar>
              <span>{props.author.name}</span>
            </div>
            {props.author.role === "admin" && (
              <Badge variant="outline" className="bg-violet-500">
                Admin
              </Badge>
            )}
          </div>

          {/* Image with Fixed Size */}
          <div className="my-2 w-full h-40">
            <img
              src={props.featuredImage}
              className="rounded w-full h-full object-cover object-top"
            />
          </div>

          {/* Blog Info */}
          <div>
            <p className="flex items-center gap-2 mb-2 text-sm">
              <FaRegCalendarAlt />
              <span>{moment(props.createdAt).format("DD-MM-YYYY")}</span>
            </p>
            <h2 className="text-xl font-bold line-clamp-2">{props.title}</h2>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
