<?php

/**
 * This file belongs to Kreta.
 * The source code of application includes a LICENSE file
 * with all information about license.
 *
 * @author benatespina <benatespina@gmail.com>
 * @author gorkalaucirica <gorka.lauzirika@gmail.com>
 */

namespace Kreta\Bundle\WorkflowBundle\DependencyInjection;

use Kreta\Bundle\CoreBundle\DependencyInjection\Abstracts\AbstractExtension;

/**
 * Class KretaWorkflowExtension.
 *
 * @package Kreta\Bundle\WorkflowBundle\DependencyInjection
 */
class KretaWorkflowExtension extends AbstractExtension
{
    /**
     * {@inheritdoc}
     */
    protected function getConfigFilesLocation()
    {
        return __DIR__ . '/../Resources/config';
    }

    /**
     * {@inheritdoc}
     */
    protected function getConfigurationInstance()
    {
        return new Configuration();
    }

    /**
     * {@inheritdoc}
     */
    protected function getConfigFiles()
    {
        return ['services', 'factories', 'parameters', 'repositories'];
    }
}