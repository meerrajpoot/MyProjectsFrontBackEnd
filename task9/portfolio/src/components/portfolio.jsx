import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, Stack } from '@chakra-ui/react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleAddProject = () => {
    setProjects([...projects, { name: projectName, description: projectDescription }]);
    setProjectName('');
    setProjectDescription('');
  };

  const handleDeleteProject = (index) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>
        Portfolio
      </Heading>
      <Flex flexDirection="column" alignItems="center">
        <Stack spacing={4} w="full" maxW="lg">
          <Input
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
          <Input
            placeholder="Project Description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
          <Button
            onClick={handleAddProject}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add Project
          </Button>
        </Stack>
        <Box mt={8}>
          {projects.map((project, index) => (
            <Flex key={index} justifyContent="space-between" mb={4}>
              <Box>
                <Heading size="md">{project.name}</Heading>
                <p>{project.description}</p>
              </Box>
              <Button
                onClick={() => handleDeleteProject(index)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Delete
              </Button>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Portfolio;